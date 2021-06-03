import React from "react";
import { Link } from "react-router-dom"
class Splash extends React.Component {

    renderHeader(){
        if (!this.props.loggedIn){
            return (
                <div className="splash-header-right">
                    <Link to="/login">
                        <div className="button">
                            Login
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className="button">
                            Sign Up
                        </div>
                    </Link>
                </div>
            )
        }
        else{
            return (
                <div className="splash-header-right">
                    <h2>Welcome, {this.props.user.displayName}</h2>
                    <button className="button" onClick={()=>this.props.logout()}>Logout</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="splash-header">
                <div className="splash-logo">
                    <h1>Schwack</h1>
                </div>
                {this.renderHeader()}
            </div>
        )
    }
}

export default Splash;