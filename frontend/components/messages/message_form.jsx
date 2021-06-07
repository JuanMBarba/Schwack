import React from "react";


class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { 
        //     userId: this.props.currentUser.id,
        //     channelId: 1,
        //     body: "" 
        // };
        this.state = Object.assign({}, this.props.message);
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.editing){
            this.props.updateMessage(this.state);
            this.props.editSwitch(e);
        }
        else {
            this.props.createMessage(this.state);
        }
        this.setState({ body: "" });
    }

    renderEditingButtons(){
        // console.log(this.state);
        return (
            <div className="edit-buttons">
                <button onClick={this.props.editSwitch} className="cancel-button">
                    Cancel
                </button>
                <button onClick={this.handleSubmit} className="save-button">
                    ⏎ Save Changes
                </button>
            </div>
        )
    }

    render() {
        return (
            <div className={`message-form-container${this.props.editing ? " editing": ""}`}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Send a message to live chat"
                    />
                    <button>►</button>
                </form>
                {this.props.editing ? this.renderEditingButtons(): ""}
            </div>
        );
    }

}

export default MessageForm;