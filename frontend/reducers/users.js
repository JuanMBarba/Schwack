import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user"
import { RECEIVE_CURRENT_USER } from "../actions/session";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign(nextState, action.users)
        case RECEIVE_USER:
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;
