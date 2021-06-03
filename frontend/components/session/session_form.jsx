import React from "react";
import { Link } from "react-router-dom";
import SessionFormErrors from "./session_form_errors";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display_name: "",
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
                <input onChange={this.update("display_name")} type="text" value={this.state.displayName}/>
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
        console.log(this.state);
        return (
            <div className="form-container">
                
                <Link to="/">
                    <div className="form-header">
                        <h1>Schwack</h1>
                    </div>
                </Link>
                
                
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === "Sign Up" ? this.renderDisplayNameInput():""}
                    <label>
                        Email:
                        <input onChange={this.update("email")} type="text" value={this.state.email}/>
                    </label>
                    <label>
                        Password:
                        <input onChange={this.update("password")} type="password" value={this.state.password}/>
                    </label>
                    <button>{this.props.formType}</button>
                </form>
                
                <button onClick={this.handleDemoLogin}>Demo Login</button>
                {this.renderSessionFormSwitchLink()}
                <SessionFormErrors errors={this.props.errors} />
            </div>
        )
    }
}

export default SessionForm;