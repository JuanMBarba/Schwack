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
                <input onChange={this.update("displayName")} type="text" value={this.state.displayName}/>
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
                <div>
                    <p>Have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>Need an account?</p>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="form-header">
                    <Link to="/">
                        <h1>Schwack</h1>
                    </Link>
                </div>
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