import { combineReducers } from 'redux'

import { IPortfolioState, portfolioReducer } from "./portfolio/portfolio.reducer";
import { IBlogState, blogReducer } from './blog/blog.reducer';


export interface IAppState {
    'portfolio'?: IPortfolioState;
    'blog'?:IBlogState
}

export const rootReducer = combineReducers<IAppState>({
    'portfolio': portfolioReducer,
    'blog': blogReducer
});
