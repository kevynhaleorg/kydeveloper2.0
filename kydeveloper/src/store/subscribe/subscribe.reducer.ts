import { SubscribeActions } from "../../actions/subscribe/subscribe.actions";


export interface ISubscribeRegisterState {
    loading: boolean;
    error: boolean;
    sent: boolean;
    email: string;
}

export interface ISubscribeResendState {
    loading: boolean;
    error: boolean;
    sent: boolean;
}

export interface ISubscribeConfirmState {
    loading: boolean;
    error: boolean;
    confirmed: boolean;
}

export interface ISubscribeState {
    register: ISubscribeRegisterState,
    resend: ISubscribeResendState,
    confirm: ISubscribeConfirmState
}

const INITIAL_STATE: ISubscribeState = {
    register: {
        loading: false,
        error: false,
        sent: false,
        email: null
    },
    resend: {
        loading: false,
        error: false,
        sent: false
    },
    confirm: {
        loading: false,
        error: false,
        confirmed: false
    }

}

export function subscribeReducer(
    state: ISubscribeState = INITIAL_STATE,
    action: any): any {

    switch(action.type) {

        // REGISTER

        case SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_REQUEST: {

            return {
                ...state,
                register: {
                    ...state.register,
                    email: action.payload
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START: {

            return {
                ...state,
                register: {
                    ...state.register,
                    error: false,
                    loading: true
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_RESPONSE: {
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    error: false,  
                    sent: true  
                } 
            }
        }

        case SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_ERROR: {
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,  
                    error: true  
                }
            }
        }

        // RESEND

        case SubscribeActions.SUBSCRIBE_RESEND_REQUEST_START: {

            return {
                ...state,
                resend: {
                    ...state.resend,
                    error: false,
                    loading: true
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_RESEND_REQUEST_RESPONSE: {
            return {
                ...state,
                resend: {
                    ...state.resend,
                    loading: false,
                    error: false,  
                    sent: true  
                } 
            }
        }

        case SubscribeActions.SUBSCRIBE_RESEND_REQUEST_ERROR: {
            return {
                ...state,
                resend: {
                    ...state.resend,
                    loading: false,  
                    error: true  
                }
            }
        }

        case SubscribeActions.SUBSCRIBE_RESET: {
            return INITIAL_STATE
        }

        default:
            return state

    }

}