import { ContactActions } from "../../actions/contact/contact.actions";

export interface IContactState {
    loading: boolean;
    error: boolean;
    sent: boolean;
}

const INITIAL_STATE: IContactState = {
    loading: false,
    error: false,
    sent: false
}

export function contactReducer(
    state: IContactState = INITIAL_STATE,
    action: any): any {

    switch(action.type) {

        case ContactActions.CONTACT_SUBMIT_REQUEST_START: {

            return {
                ...state,
                error: false,
                loading: true,       
            }
        }

        case ContactActions.CONTACT_SUBMIT_RESPONSE: {
            return {
                ...state,
                loading: false,
                error: false,  
                sent: true     
            }
        }

        case ContactActions.CONTACT_SUBMIT_ERROR: {
            return {
                ...state,
                loading: false,  
                error: true  
            }
        }

        default:
            return state

    }

}