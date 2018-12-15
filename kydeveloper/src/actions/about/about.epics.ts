import { Injectable } from "../../../node_modules/@angular/core";
import { AboutService } from "../../app/services";
import { EpicCreator } from "../../store/root.model";
import { EpicMiddleware, ActionsObservable, createEpicMiddleware } from "../../../node_modules/redux-observable";
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
        return [
            createEpicMiddleware(this.getReadingList.bind(this)),
            createEpicMiddleware(this.getReadingItem.bind(this)),
            createEpicMiddleware(this.recommendBook.bind(this)),
            createEpicMiddleware(this.getBiography.bind(this)),
            createEpicMiddleware(this.getResume.bind(this)),
            createEpicMiddleware(this.getPresentations.bind(this)),
            createEpicMiddleware(this.requestPresentation.bind(this)),
            createEpicMiddleware(this.getMilestones.bind(this))
        ]
    }

    getReadingList(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_GET_READING_LIST)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.getReadingList(
                            {
                                category: store.getState().about.readingList.category,
                                pageSize: store.getState().about.readingList.pageSize,
                                page: store.getState().about.readingList.page,
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

    getResume(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_GET_RESUME)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.getResume()
                        .pipe(
                                map( value => this._actions.getResumeResponse(value)),
                                catchError(error => of(this._actions.getResumeError(error))),
                                startWith(this._actions.getResumeStart()))
                    })
            )
    }

    getPresentations(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_GET_PRESENTATIONS)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.getPresentations()
                        .pipe(
                                map( value => this._actions.getPresentationsResponse(value)),
                                catchError(error => of(this._actions.getPresentationsError(error))),
                                startWith(this._actions.getPresentationsStart()))
                    })
            )
    }

    requestPresentation(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
            .ofType( AboutActions.ABOUT_REQUEST_PRESENTATION)
            .pipe(
                mergeMap(
                    ({payload}) => {
                        return this._aboutService.requestPresentation(payload)
                        .pipe(
                                map( value => this._actions.requestPresentationResponse()),
                                catchError(error => of(this._actions.requestPresentationError(error))),
                                startWith(this._actions.requestPresentationStart()))
                    })
            )
    }

    getMilestones(action$: ActionsObservable<any>, store: any): Observable<any> {
      return action$
          .ofType( AboutActions.ABOUT_REQUEST_MILESTONES)
          .pipe(
              mergeMap(
                  ({payload}) => {
                      return this._aboutService.requestMilestones()
                      .pipe(
                        map( value => this._actions.requestMilestonesResponse(value)),
                        catchError(error => of(this._actions.requestMilestonesError(error))),
                        startWith(this._actions.requestMilestonesStart()))
                  })
          )
  }


}