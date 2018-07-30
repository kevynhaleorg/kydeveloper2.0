import { Injectable } from "../../../node_modules/@angular/core";
import { AboutService } from "../../app/services";
import { EpicCreator } from "../../store/root.model";
import { EpicMiddleware, ActionsObservable } from "../../../node_modules/redux-observable";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { mergeMap, map, catchError, startWith } from "../../../node_modules/rxjs/operators";
import { of } from "../../../node_modules/rxjs/observable/of";
import { AboutActions } from "./about.actions";

@Injectable()
export class AboutEpics implements EpicCreator {

    constructor(
        private _actions: AboutActions,
        private _aboutService: AboutService) {}

    createEpics(): EpicMiddleware<any, any, any, any>[] {
        return []
    }

    getReadingList(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_GET_READING_LIST)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.getReadingList(
                            {
                                category: store.getStore().about.readinglist.category,
                                pageSize: store.getStore().about.readinglist.pageSize,
                                page: store.getStore().about.readinglist.page,
                            }).pipe(
                                map( value => this._actions.getReadingListResponse(value)),
                                catchError(error => of(this._actions.getReadingListError(error))),
                                startWith(this._actions.getReadingListStart()))
                    })
            )       
    }

    getReadingItem(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_GET_READING_ITEM)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.getReadingItem(payload)
                        .pipe(
                                map( value => this._actions.getReadingItemResponse(value)),
                                catchError(error => of(this._actions.getReadingItemError(error))),
                                startWith(this._actions.getReadingItemStart()))
                    })
            )       
    }

    recommendBook(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_RECOMMEND_BOOK)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.recommendBook(payload)
                        .pipe(
                                map( value => this._actions.recommendBookResponse()),
                                catchError(error => of(this._actions.recommendBookError(error))),
                                startWith(this._actions.recommendBookStart()))
                    })
            )       
    }

    getBiography(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_GET_BIOGRAPHY)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.getBiography()
                        .pipe(
                                map( value => this._actions.getBiographyResponse(value)),
                                catchError(error => of(this._actions.getBiographyError(error))),
                                startWith(this._actions.getBiographyStart()))
                    })
            )       
    }


}