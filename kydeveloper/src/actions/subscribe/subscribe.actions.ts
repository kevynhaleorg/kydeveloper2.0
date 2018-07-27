import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { FluxStandardAction } from "flux-standard-action";
import { ICommandName } from "selenium-webdriver";

@Injectable()
export class SubscribeActions {
    static SUBSCRIBE_SUBMIT_REGISTER_REQUEST = "SUBSCRIBE_SUBMIT_REGISTER_REQUEST";
    static SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START = "SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START"
    static SUBSCRIBE_SUBMIT_REGISTER_RESPONSE = "SUBSCRIBE_SUBMIT_REGISTER_ESPONSE";
    static SUBSCRIBE_SUBMIT_REGISTER_ERROR = "SUBSCRIBE_SUBMIT_REGISTER_ERROR"

    @dispatch()
    submit(email: string): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_REQUEST,
            meta: {},
            payload: email
        }
    }

    submitStart(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START,
            meta: {},
            payload: {}
        }
    }

    submitResponse(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_RESPONSE,
            meta: {},
            payload: {}
        }
    }

    submitError(error:Error): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_RESPONSE,
            meta: {},
            payload: error
        }
    }
}