import { combineReducers } from "redux"
import sessionErrorsReducer from "./session_errors";
import messageErrorsReducer from "./message_errors";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    message: messageErrorsReducer
})

export default errorsReducer;