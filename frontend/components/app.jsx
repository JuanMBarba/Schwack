import React from "react";
import { Route,
        Switch,
        Redirect} from "react-router-dom";

import SplashContainer from "./splash/splash_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route";
import MessageListContainer from "./messages/message_list_container";

const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <Route exact path='/' component={SplashContainer} />
                <ProtectedRoute path='/liveChat' component={MessageListContainer}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default App;