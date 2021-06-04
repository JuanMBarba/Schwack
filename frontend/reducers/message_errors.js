import { RECEIVE_MESSAGE, REMOVE_MESSAGE, RECEIVE_MESSAGE_ERRORS } from "../actions/message";

const messageErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_MESSAGE_ERRORS:
            return action.errors;
        case RECEIVE_MESSAGE:
            return [];
        case REMOVE_MESSAGE:
            return [];
        default:
            return state;
    }
}

export default messageErrorsReducer;