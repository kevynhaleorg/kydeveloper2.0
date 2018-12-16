import { Injectable } from "@angular/core";
import { EpicCreator } from "../../store/root.model";
import { EpicMiddleware, ActionsObservable } from "redux-observable";

import { createEpicMiddleware } from 'redux-observable'
import { PortfolioActions } from "./portfolio.actions";

import { of } from 'rxjs/observable/of'
import { filter } from 'rxjs/operators/filter'
import { map } from 'rxjs/operators/map'
import { mergeMap } from 'rxjs/operators/mergeMap'
import { catchError } from 'rxjs/operators/catchError'
import { startWith } from 'rxjs/operators'
import { Observable } from "rxjs/Observable";
import { PortfolioService } from "../../app/services/portfolio/portfolio.service";



@Injectable()
export class PortfolioEpics implements EpicCreator {

    constructor(
      private _actions: PortfolioActions,
      private _service: PortfolioService) {}

    createEpics() {
        return [
            createEpicMiddleware(this.getProjects.bind(this)),
            createEpicMiddleware(this.setProjectsCategory.bind(this)),
            createEpicMiddleware(this.setProjectsFilter.bind(this)),
          ]
    }

    setProjectsFilter(action$: ActionsObservable<any>, store: any): Observable<any> {
      return action$
        .ofType(PortfolioActions.PROJECTS_SET_FILTER)
        .debounceTime(500)
        .map(
          () => this._actions.getProjectsInternal()
        )
    }

    setProjectsCategory(action$: ActionsObservable<any>, store: any): Observable<any> {
      return action$
        .ofType(PortfolioActions.PROJECTS_SET_CATEGORY)
        .map(
          () => this._actions.getProjectsInternal()
        )
    }

    getProjects(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
          .ofType( PortfolioActions.PROJECTS_GET)
          .pipe(
            mergeMap(
              ({payload}) => {
                return this._service.getProjects()
                  .pipe(
                    map( value => this._actions.getProjectsResponse(value)),
                      catchError(error => of(this._actions.getProjectsError(error))),
                      startWith(this._actions.getProjectsStart()))
                })
            )
    }
}