import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { FluxStandardAction } from "flux-standard-action";
import { ICommandName } from "selenium-webdriver";
import { IContactRequest } from "../../app/services/contact/contact.service";

@Injectable()
export class ContactActions {
    static CONTACT_SUBMIT_REQUEST = "CONTACT_SUBMIT_REQUEST";
    static CONTACT_SUBMIT_REQUEST_START = "CONTACT_SUBMIT_REQUEST_START"
    static CONTACT_SUBMIT_RESPONSE = "CONTACT_SUBMIT_RESPONSE";
    static CONTACT_SUBMIT_ERROR = "CONTACT_SUBMIT_ERROR"

    @dispatch()
    submit(request: IContactRequest): FluxStandardAction<{}, {}> {
        return {
            type: ContactActions.CONTACT_SUBMIT_REQUEST,
            meta: {},
            payload: request
        }
    }

    submitStart(): FluxStandardAction<{}, {}> {
        return {
            type: ContactActions.CONTACT_SUBMIT_REQUEST_START,
            meta: {},
            payload: {}
        }
    }

    submitResponse(): FluxStandardAction<{}, {}> {
        return {
            type: ContactActions.CONTACT_SUBMIT_RESPONSE,
            meta: {},
            payload: {}
        }
    }

    submitError(error:Error): FluxStandardAction<{}, {}> {
        return {
            type: ContactActions.CONTACT_SUBMIT_RESPONSE,
            meta: {},
            payload: error
        }
    }
}