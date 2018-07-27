import { SubscribeActions } from "../../actions/subscribe/subscribe.actions";


export interface ISubscribeRegisterState {
    loading: boolean;
    error: boolean;
    sent: boolean;
}

export interface ISubscribeState {
    register: ISubscribeRegisterState
}

const INITIAL_STATE: ISubscribeState = {
    register: {
        loading: false,
        error: false,
        sent: false
    }
}

export function subscribeReducer(
    state: ISubscribeState = INITIAL_STATE,
    action: any): any {

    switch(action.type) {

        case SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_REQUEST_START: {

            return {
                ...state,
                register: {
                    error: false,
                    loading: true,
                }     
            }
        }

        case SubscribeActions.SUBSCRIBE_SUBMIT_REGISTER_RESPONSE: {
            return {
                ...state,
                register: {
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
                    loading: false,  
                    error: true  
                }
            }
        }

        default:
            return state

    }

}