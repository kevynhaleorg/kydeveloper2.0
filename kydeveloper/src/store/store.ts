import { combineReducers } from 'redux'

import { IPortfolioState, portfolioReducer } from "./portfolio/portfolio.reducer";


export interface IAppState {
    'portfolio'?: IPortfolioState;
}

export const rootReducer = combineReducers<IAppState>({
    'portfolio': portfolioReducer
});
