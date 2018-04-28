import { Injectable } from "@angular/core";
import { EpicCreator } from "../../store/root.model";
import { EpicMiddleware } from "redux-observable";

import { createEpicMiddleware } from 'redux-observable'
import { PortfolioActions } from "./portfolio.actions";

import { of } from 'rxjs/observable/of'
import { filter } from 'rxjs/operators/filter'
import { map } from 'rxjs/operators/map'
import { mergeMap } from 'rxjs/operators/mergeMap'
import { catchError } from 'rxjs/operators/catchError'
import { startWith } from 'rxjs/operators'



@Injectable()
export class PortfolioEpics implements EpicCreator {

    constructor(private _actions: PortfolioActions) {}

    createEpics() {
        return [
            createEpicMiddleware(this.fetchProjects.bind(this)),
            //createEpicMiddleware(this.filter.bind(this))
          ]
    }

 /**   filter(action$, store) {
        return action$
          .ofType(PortfolioActions.FILTER)
          .pipe(
            filter(
              ({payload}) => {
                const currentFilter = store.getState()['portfolio'].itemState.search.filterBy
                return payload !== currentFilter
              }
            ),
            map(({payload}) => {
              //TODO: update the list of exports
            })
          )
      }*/

    fetchProjects(action$, store) {
        return action$
            .ofType( PortfolioActions.FETCH_RESPONSE);

    }
}