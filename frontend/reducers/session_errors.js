import { RECEIVE_SESSION_ERRORS } from "../actions/session";

const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }

}

export default sessionErrorsReducer;