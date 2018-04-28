import { Injectable } from '@angular/core'
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action'

@Injectable()
export class PortfolioActions {
    static FETCH_REQUEST = "FETCH_REQUEST";
    static FETCH_RESPONSE = "FETCH_RESPONSE";
    static FILTER = "FILTER"

    @dispatch()
    filter(key: string): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.FILTER,
            meta: {},
            payload: {'filterBy': key}
        }
    }
}