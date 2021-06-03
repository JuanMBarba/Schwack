import React from "react";
import { Link } from "react-router-dom"
class Splash extends React.Component {

    renderHeader(){
        if (!this.props.loggedIn){
            return (
                <div className="splash-header">
                    <h1>Schwack</h1>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )
        }
        else{
            console.log(this.props);
            return (
                <div className="splash-header">
                    <h1>Schwack</h1>
                    <h2>Welcome, {this.props.user.displayName}</h2>
                    <button onClick={()=>this.props.logout()}>Logout</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
            </div>
        )
    }
}

export default Splash;