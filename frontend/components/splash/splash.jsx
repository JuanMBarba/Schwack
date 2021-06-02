import React from "react";
import { Link } from "react-router-dom"
const Splash = () => {
    return (
        <div>
            <div className="splash-header">
                <h1>Schwack</h1>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default Splash;