import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root";
import thunk from "redux-thunk"
import logger from "redux-logger";

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)) //Logger Removed For Production App
}

export default configureStore;