import {combineReducers} from "redux";
import usersReducer from "./users";
import messagesReducer from "./messages";
import channelsReducer from "./channels"

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    channels: channelsReducer
})

export default entitiesReducer;