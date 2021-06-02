import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import configureStore from "./store/store"
import {login, logout, signup} from "./actions/session"

document.addEventListener("DOMContentLoaded", () => {
    //BootStrap Current User
    let preloadedState;
    if (window.currentUser){
        preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        delete window.currentUser;
    }

    //Setup store and reference to root element in html
    const store = configureStore(preloadedState);
    const root = document.getElementById("root");

    //Testing on window
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    //Render Root component on root element in html
    ReactDOM.render(<Root store={store}/>, root);
})