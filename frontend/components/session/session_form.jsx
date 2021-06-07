import React from "react";
import { Link } from "react-router-dom";
import SessionFormErrors from "./session_form_errors";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: "",
            email:"",
            password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.renderDisplayNameInput = this.renderDisplayNameInput.bind(this);
        this.renderSessionFormSwitchLink = this.renderSessionFormSwitchLink.bind(this);
    }

    componentDidMount(){
        this.props.resetErrors();
    }

    renderDisplayNameInput(){
        return (
            <label>
                Display Name:
                <input onChange={this.update("displayName")} type="text" value={this.state.displayName} placeholder="Full Name" />
            </label>
        )
    }

    handleDemoLogin(e){
        e.preventDefault();
        const demoUser = {
            displayName: "Demo User",
            email: "demo@mail.com",
            password: "123456"
        }
        this.props.demoAction(demoUser)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.formAction(this.state).then()
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    renderSessionFormSwitchLink(){
        if( this.props.formType === "Sign Up"){
            return (
                <div className="form-switch">
                    <p>Have an account?</p>
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div className="form-switch">
                    <p>Need an account?</p>
                    <Link to="/signup">
                        <button>
                            Sign Up
                        </button>
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="form-container">
                
                <Link to="/">
                    <div className="form-header">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Solid_unicursal_hexagram.svg/1280px-Solid_unicursal_hexagram.svg.png" src-alt="logo img" />
                        <h1>Schwack</h1>
                    </div>
                </Link>
                
                
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === "Sign Up" ? this.renderDisplayNameInput():""}
                    <label>
                        Email:
                        <input onChange={this.update("email")} type="text" value={this.state.email} placeholder="your@mail.com" />
                    </label>
                    <label>
                        Password:
                        <input onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password (At least 6 characters)"/>
                    </label>
                    <SessionFormErrors errors={this.props.errors} />
                    <button>{this.props.formType}</button>
                    <button onClick={this.handleDemoLogin}>Demo Login</button>
                </form>
                
                
                {this.renderSessionFormSwitchLink()}
                
            </div>
        )
    }
}

export default SessionForm;