import React from "react";

    class SessionForm extends React.Component {

        renderDisplayNameInput(){
            return (
                <label>
                    Display Name:
                    <input type="text" />
                </label>
            )
        }

        render() {
            return (
                <div>
                    <h1>{this.props.formType}</h1>
                    <form>
                        {this.props.formType === "Sign Up" ? this.renderDisplayNameInput():""}
                        <label>
                            Email:
                            <input type="text" />
                        </label>
                        <label>
                            Password:
                            <input type="password" />
                        </label>
                    </form>
                </div>
            )
        }
    }

export default SessionForm;