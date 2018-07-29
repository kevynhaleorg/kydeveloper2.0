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
    email: string;
}

export interface ISubscribeUnsubscribeState {
    loading: boolean;
    error: boolean;
    unsubscribed: boolean;
    email: string;
}

export interface ISubscribeState {
    register: ISubscribeRegisterState,
    resend: ISubscribeResendState,
    confirm: ISubscribeConfirmState,
    unsubscribe: ISubscribeUnsubscribeState
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
        confirmed: false,
        email: null
    },
    unsubscribe: {
        loading: false,
        error: false,
        unsubscribed: false,
        email: null
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

        // CONFIRM

        case SubscribeActions.SUBSCRIBE_CONFIRM_START: {
            return {
                ...state,
                confirm: {
                    ...state.confirm,
                    error: false,
                    loading: true
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_CONFIRM_RESPONSE: {
            return {
                ...state,
                confirm: {
                    ...state.confirm,
                    error: false,
                    loading: false,
                    email: action.payload.email,
                    confirmed: action.payload.confirmed
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_CONFIRM_ERROR: {
            return {
                ...state,
                confirm: {
                    ...state.confirm,
                    error: true,
                    loading: false
                }     
            }
        }

        // UNSUBSCRIBE

        case SubscribeActions.SUBSCRIBE_UNSUBSCRIBE_START: {
            return {
                ...state,
                unsubscribe: {
                    ...state.unsubscribe,
                    error: false,
                    loading: true
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_UNSUBSCRIBE_RESPONSE: {
            return {
                ...state,
                unsubscribe: {
                    ...state.unsubscribe,
                    error: false,
                    loading: false,
                    email: action.payload.email,
                    unsubscribed: action.payload.unsubscribed
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_UNSUBSCRIBE_ERROR: {
            return {
                ...state,
                unsubscribe: {
                    ...state.unsubscribe,
                    error: true,
                    loading: false
                }     
            }
        }



        default:
            return state

    }

}