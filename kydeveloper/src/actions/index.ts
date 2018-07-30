import { Action } from "redux";
import { PortfolioActions } from "./portfolio/portfolio.actions";
import { KY_EPICS } from "../store/root.model";
import { PortfolioEpics } from "./portfolio/portfolio.epics";
import { ContactActions } from "./contact/contact.actions";
import { ContactEpics } from "./contact/contact.epics";
import { SubscribeActions } from "./subscribe/subscribe.actions";
import { SubscribeEpics } from "./subscribe/subscribe.epics";
import { AboutActions } from "./about/about.actions";
import { AboutEpics } from "./about/about.epics";
import { BlogActions } from "./blog/blog.actions";


export interface IPayloadAction extends Action {
    payload?: any;
}
  
export const ACTION_PROVIDERS = [
    PortfolioActions,
    ContactActions,
    SubscribeActions,
    AboutActions,
    BlogActions
]

export const EPIC_PROVIDERS = [
    { provide: KY_EPICS, useClass: PortfolioEpics, multi: true },
    { provide: KY_EPICS, useClass: ContactEpics, multi: true },
    { provide: KY_EPICS, useClass: SubscribeEpics, multi: true },
    { provide: KY_EPICS, useClass: AboutEpics, multi: true },
]

export {
    PortfolioActions,
    ContactActions,
    SubscribeActions,
    AboutActions,
    BlogActions
}