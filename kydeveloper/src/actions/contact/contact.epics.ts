import { Injectable } from "@angular/core";
import { EpicCreator } from "../../store/root.model";
import { ContactActions } from "./contact.actions";
import { EpicMiddleware, createEpicMiddleware } from "redux-observable";
import { map } from "rxjs/operators/map";
import { Observable } from "rxjs/Observable";
import { startWith } from "rxjs/operators/startWith";
import { catchError } from "rxjs/operators/catchError";
import { of } from "rxjs/observable/of";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { mergeMap } from "rxjs/operators/mergeMap";



@Injectable()
export class ContactEpics implements EpicCreator {

    constructor(private _actions: ContactActions) {}

    createEpics(): EpicMiddleware<any, any, any, any>[] {
        return [
            createEpicMiddleware(this.submit.bind(this))
          ]
    }

    submit(action$: any, store: any): Observable<any> {
        return action$
            .ofType( ContactActions.CONTACT_SUBMIT_REQUEST)
            .pipe(
                mergeMap(
                    () => {
                        // TODO make call to submit over http.
                        return Observable.of("test").delay(5000)
                            .pipe(
                                map( value => this._actions.submitResponse()),
                                catchError(error => of(this._actions.submitError(error))),
                                startWith(this._actions.submitStart())
                        )
                    }
                )

            )
            
    }


    

}