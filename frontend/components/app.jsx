import React from "react";
import { Route,
        Switch} from "react-router-dom";

import Splash from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route";
const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <Route path='/' component={Splash} />
            </Switch>
        </div>
    )
}

export default App;