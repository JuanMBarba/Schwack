import React from "react";
import { Link } from "react-router-dom"
class Splash extends React.Component {

    renderHeader(){
        if (!this.props.loggedIn){
            return (
                <div className="splash-header-right">
                    <Link to="/login">
                        <div className="alt-splash-button">
                            LOGIN
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className="splash-button">
                            SIGN UP
                        </div>
                    </Link>
                    <button className="splash-button" onClick={() => this.props.demoLogin()}>DEMO LOGIN</button>
                </div>
            )
        }
        else{
            return (
                <div className="splash-header-right">
                    <h2>Welcome, {this.props.user.displayName}</h2>
                    <button className="splash-button" onClick={()=>this.props.logout()}>LOGOUT</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="splash-container">
                <div className="splash-header">
                    <div className="splash-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Solid_unicursal_hexagram.svg/1280px-Solid_unicursal_hexagram.svg.png" src-alt="logo img"/>
                        <h2>schwack</h2>
                    </div>
                    {this.renderHeader()}
                </div>
                <div className="splash-body">

                </div>
            </div>
        )
    }
}

export default Splash;