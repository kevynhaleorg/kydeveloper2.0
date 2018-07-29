import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { FluxStandardAction } from "flux-standard-action";
import { ICommandName } from "selenium-webdriver";
import { resetFakeAsyncZone } from "../../../node_modules/@angular/core/testing";
import { ISubscribeConfirmResponse, ISubscribeUnsubResponse } from "../../app/services/subscribe/subscribe.service";

@Injectable()
export class SubscribeActions {
    static SUBSCRIBE_RESEND_REGISTER_REQUEST(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    static SUBSCRIBE_SUBMIT_REGISTER_REQUEST = "SUBSCRIBE_SUBMIT_REGISTER_REQUEST";
    static SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START = "SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START"
    static SUBSCRIBE_SUBMIT_REGISTER_RESPONSE = "SUBSCRIBE_SUBMIT_REGISTER_ESPONSE";
    static SUBSCRIBE_SUBMIT_REGISTER_ERROR = "SUBSCRIBE_SUBMIT_REGISTER_ERROR"

    static SUBSCRIBE_RESEND_REQUEST = "SUBSCRIBE_RESEND_REQUEST"
    static SUBSCRIBE_RESEND_REQUEST_START = "SUBSCRIBE_RESEND_REQUEST_START"
    static SUBSCRIBE_RESEND_REQUEST_RESPONSE = "SUBSCRIBE_RESEND_REQUEST_RESPONSE"
    static SUBSCRIBE_RESEND_REQUEST_ERROR = "SUBSCRIBE_RESEND_REQUEST_ERROR"
    static SUBSCRIBE_RESET = "SUBSCRIBE_RESET"

    static SUBSCRIBE_CONFIRM = "SUBSCRIBE_CONFIRM"
    static SUBSCRIBE_CONFIRM_START = "SUBSCRIBE_CONFIRM_START"
    static SUBSCRIBE_CONFIRM_RESPONSE = "SUBSCRIBE_CONFIRM_RESPONSE"
    static SUBSCRIBE_CONFIRM_ERROR = "SUBSCRIBE_CONFIRM_ERROR"

    static SUBSCRIBE_UNSUBSCRIBE = "SUBSCRIBE_UNSUBSCRIBE"
    static SUBSCRIBE_UNSUBSCRIBE_START = "SUBSCRIBE_UNSUBSCRIBE_START"
    static SUBSCRIBE_UNSUBSCRIBE_RESPONSE = "SUBSCRIBE_UNSUBSCRIBE_RESPONSE"
    static SUBSCRIBE_UNSUBSCRIBE_ERROR = "SUBSCRIBE_UNSUBSCRIBE_ERROR"

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
            type: SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_ERROR,
            meta: {},
            payload: error
        }
    }

    @dispatch()
    resend(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_RESEND_REQUEST,
            meta: {},
            payload: {}
        }
    }

    resendStart(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_RESEND_REQUEST_START,
            meta: {},
            payload: {}
        }
    }

    resendResponse(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_RESEND_REQUEST_RESPONSE,
            meta: {},
            payload: {}
        }
    }

    resendError(error:Error): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_RESEND_REQUEST_ERROR,
            meta: {},
            payload: error
        }
    }

    @dispatch()
    reset(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_RESET,
            meta: {},
            payload: {}
        }
    }

    // SUCCESS

    @dispatch()
    confirm(code: string): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_CONFIRM,
            meta: {},
            payload: code
        }
    }

    confirmStart(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_CONFIRM_START,
            meta: {},
            payload: {}
        }
    }

    confirmResponse(response: ISubscribeConfirmResponse): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_CONFIRM_RESPONSE,
            meta: {},
            payload: response
        }
    }

    confirmError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_CONFIRM_ERROR,
            meta: {},
            payload: error
        }
    }

    // UNSUBSCRIBE

    @dispatch()
    unsubscribe(code: string): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_UNSUBSCRIBE,
            meta: {},
            payload: code
        }
    }

    unsubscribeStart(): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_UNSUBSCRIBE_START,
            meta: {},
            payload: {}
        }
    }

    unsubscribeResponse(response: ISubscribeUnsubResponse): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_UNSUBSCRIBE_RESPONSE,
            meta: {},
            payload: response
        }
    }

    unsubscribeError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: SubscribeActions.SUBSCRIBE_UNSUBSCRIBE_ERROR,
            meta: {},
            payload: error
        }
    }
}