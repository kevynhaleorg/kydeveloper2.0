import { combineReducers } from 'redux'

import { IPortfolioState, portfolioReducer } from "./portfolio/portfolio.reducer";


export interface IAppState {
    portfolioState?: IPortfolioState;
}

export const rootReducer = combineReducers<IAppState>({
    portfolioState: portfolioReducer
});
