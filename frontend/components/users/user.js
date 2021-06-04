import * as UserAPIUtil from "../../util/user_api";

export const RECEIVE_USERS = "RECEIVE_USERS";

//action creators
const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

//thunk action cretors

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}