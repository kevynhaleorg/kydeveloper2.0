import { combineReducers } from 'redux'

import { IPortfolioState, portfolioReducer } from "./portfolio/portfolio.reducer";
import { IBlogState, blogReducer } from './blog/blog.reducer';
import { IContactState } from '.';
import { contactReducer } from './contact/contact.reducer';


export interface IAppState {
    'portfolio'?: IPortfolioState;
    'blog'?:IBlogState;
    'contact'?:IContactState;
}

export const rootReducer = combineReducers<IAppState>({
    'portfolio': portfolioReducer,
    'blog': blogReducer,
    'contact': contactReducer
});
