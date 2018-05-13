import { Action } from "redux";
import { PortfolioActions } from "./portfolio/portfolio.actions";
import { KY_EPICS } from "../store/root.model";
import { PortfolioEpics } from "./portfolio/portfolio.epics";
import { ContactActions } from "./contact/contact.actions";
import { ContactEpics } from "./contact/contact.epics";


export interface IPayloadAction extends Action {
    payload?: any;
}
  
export const ACTION_PROVIDERS = [
    PortfolioActions,
    ContactActions
]

export const EPIC_PROVIDERS = [
    { provide: KY_EPICS, useClass: PortfolioEpics, multi: true },
    { provide: KY_EPICS, useClass: ContactEpics, multi: true },
]