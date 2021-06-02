import React from "react";

    class SessionForm extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                displayName: "",
                email:"",
                password:""
            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.renderDisplayNameInput = this.renderDisplayNameInput.bind(this);
        }

        renderDisplayNameInput(){
            return (
                <label>
                    Display Name:
                    <input onChange={this.update("displayName")} type="text" value={this.state.displayName}/>
                </label>
            )
        }

        handleSubmit(e){
            e.preventDefault();
            this.props.formAction(this.state).then()
        }

        update(field){
            return e => this.setState({[field]: e.target.value})
        }

        render() {
            console.log(this.props);
            return (
                <div>
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
                    <div className="form-errors">
                        <ul>
                            {this.props.errors.map((error, index) => {
                                return <li key={index}>error</li>
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }

export default SessionForm;