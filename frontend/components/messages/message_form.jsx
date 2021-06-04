import React from "react";


class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id: this.props.currentUser.id,
            channel_id: 1,
            body: "" 
        };
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createMessage(this.state);
        App.cable.subscriptions.subscriptions[0].speak( this.state );
        this.setState({ body: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default MessageForm;