import { combineReducers } from 'redux'

import { IPortfolioState, portfolioReducer } from "./portfolio/portfolio.reducer";
import { IBlogState, blogReducer } from './blog/blog.reducer';
import { IContactState, IAboutState } from '.';
import { contactReducer } from './contact/contact.reducer';
import { ISubscribeState, subscribeReducer } from './subscribe/subscribe.reducer';
import { aboutReducer } from './about/about.reducer';


export interface IAppState {
    'portfolio'?: IPortfolioState;
    'blog'?:IBlogState;
    'contact'?:IContactState;
    'subscribe'?:ISubscribeState;
    'about'?:IAboutState;
}

export const rootReducer = combineReducers<IAppState>({
    'portfolio': portfolioReducer,
    'blog': blogReducer,
    'contact': contactReducer,
    'subscribe': subscribeReducer,
    'about': aboutReducer
});
