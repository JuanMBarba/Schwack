import React from "react";
import { Route,
        Switch} from "react-router-dom";

import Splash from "./splash/splash";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={SignupForm} />
                <Route path='/' component={Splash} />
            </Switch>
        </div>
    )
}

export default App;