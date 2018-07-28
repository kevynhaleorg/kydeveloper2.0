import { Injectable } from "@angular/core";
import { EpicCreator } from "../../store/root.model";
import { SubscribeActions } from "./subscribe.actions";
import { EpicMiddleware, createEpicMiddleware, ActionsObservable } from "redux-observable";
import { map } from "rxjs/operators/map";
import { Observable } from "rxjs/Observable";
import { startWith } from "rxjs/operators/startWith";
import { catchError } from "rxjs/operators/catchError";
import { of } from "rxjs/observable/of";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { mergeMap } from "rxjs/operators/mergeMap";
import { SubscribeService } from "../../app/services";



@Injectable()
export class SubscribeEpics implements EpicCreator {

    constructor(
        private _actions: SubscribeActions,
        private subscribeService: SubscribeService) {}

    createEpics(): EpicMiddleware<any, any, any, any>[] {
        return [
            createEpicMiddleware(this.submit.bind(this)),
            createEpicMiddleware(this.resend.bind(this))
          ]
    }

    submit(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_REQUEST)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this.subscribeService.submit(payload)
                            .pipe(
                                map( value => this._actions.submitResponse()),
                                catchError(error => of(this._actions.submitError(error))),
                                startWith(this._actions.submitStart())
                        )
                    }
                )

            )
            
    }

    resend(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( SubscribeActions.SUBSCRIBE_RESEND_REQUEST)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this.subscribeService.submit(
                            store.getState().subscribe.register.email)
                            .pipe(
                                map( value => this._actions.resendResponse()),
                                catchError(error => of(this._actions.resendError(error))),
                                startWith(this._actions.resendStart())
                        )
                    }
                )

            )
            
    }


    

}