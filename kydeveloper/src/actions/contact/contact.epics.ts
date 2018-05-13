import { Injectable } from "@angular/core";
import { EpicCreator } from "../../store/root.model";
import { ContactActions } from "./contact.actions";
import { EpicMiddleware, createEpicMiddleware, ActionsObservable } from "redux-observable";
import { map } from "rxjs/operators/map";
import { Observable } from "rxjs/Observable";
import { startWith } from "rxjs/operators/startWith";
import { catchError } from "rxjs/operators/catchError";
import { of } from "rxjs/observable/of";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { mergeMap } from "rxjs/operators/mergeMap";
import { ContactService, IContactRequest } from "../../app/services/contact/contact.service";



@Injectable()
export class ContactEpics implements EpicCreator {

    constructor(
        private _actions: ContactActions,
        private contactService: ContactService) {}

    createEpics(): EpicMiddleware<any, any, any, any>[] {
        return [
            createEpicMiddleware(this.submit.bind(this))
          ]
    }

    submit(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( ContactActions.CONTACT_SUBMIT_REQUEST)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this.contactService.submit(payload)
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