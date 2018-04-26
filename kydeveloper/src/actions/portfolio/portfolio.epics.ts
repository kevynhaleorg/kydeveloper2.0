import { Injectable } from "@angular/core";
import { EpicCreator } from "../../store/root.model";
import { EpicMiddleware } from "redux-observable";

import { createEpicMiddleware } from 'redux-observable'
import { PortfolioActions } from "./portfolio.actions";



@Injectable()
export class PortfolioEpics implements EpicCreator {

    constructor(private _portfolioActions: PortfolioActions) {}

    createEpics() {
        return [
            createEpicMiddleware( this.fetchProjects.bind( this ) )
          ]
    }

    fetchProjects(action$, store) {
        return action$
            .ofType( PortfolioActions.FETCH_RESPONSE);

    }
}