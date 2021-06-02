import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import configureStore from "./store/store"
import {login, logout, signup} from "./actions/session"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    ReactDOM.render(<Root store={store}/>, root);
})