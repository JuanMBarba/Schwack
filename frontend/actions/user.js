import * as UserAPIUtil from "../util/user_api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

//action creators
const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

const receiveUser =(user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

//thunk action cretors

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = (userId) => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}