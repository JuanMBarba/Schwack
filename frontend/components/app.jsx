import React from "react";
import { Route,
        Switch} from "react-router-dom";

import Splash from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/login' component={LoginFormContainer} />
                <Route path='/signup' component={SignupFormContainer} />
                <Route path='/' component={Splash} />
            </Switch>
        </div>
    )
}

export default App;