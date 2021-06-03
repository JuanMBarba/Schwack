import { 
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    RESET_SESSION_ERRORS } from "../actions/session";

const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RESET_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;