import React from "react";


class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId: this.props.currentUser.id,
            channelId: 1,
            body: "" 
        };
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.state);
        this.setState({ body: "" });
    }

    render() {
        return (
            <div className="message-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Send a message to live chat"
                    />
                    <button>►</button>
                </form>
            </div>
        );
    }

}

export default MessageForm;