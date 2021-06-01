import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER} from "../actions/session";


const _nullUser = {
    id: null
}

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.id = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState.id = null;
            return nextState;
        default:
            return state;
    }

}

export default sessionReducer;