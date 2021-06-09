import * as SessionAPIUtil from "../util/session_api";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_SESSION_ERRORS = "RESET_SESSION_ERRORS"
//Action Creators

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const resetSessionErrors = () => {
    return {
        type: RESET_SESSION_ERRORS
    }
}

//Thunk Action Creators

export const signup = (user) => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const login = (user) => dispatch => {
    console.log(user)
    return SessionAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveSessionErrors(errors.responseJSON)));
}



