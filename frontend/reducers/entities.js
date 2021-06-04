import {combineReducers} from "redux";
import usersReducer from "./users";
import messagesReducer from "./messages"

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer
})

export default entitiesReducer;