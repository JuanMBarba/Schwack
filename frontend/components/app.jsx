import React from "react";
import { Route,
        Switch} from "react-router-dom";
import Splash from "./splash/splash"

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/login' />
                <Route path='/signup' />
                <Route path='/' component={Splash}/>
            </Switch>
        </div>
    )
}

export default App;