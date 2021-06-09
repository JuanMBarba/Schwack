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

    // componentDidMount(){
    //     this.setState({channel_id: this.props.match.params.id})
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        // console.log(this.state);
        e.preventDefault();
        this.setState({ channelId: this.props.match.params.channelId}, () => {
            // console.log(this.state);
            if (this.props.editing) {
                this.props.updateMessage(this.state);
                this.props.editSwitch(e);
            }
            else {
                this.props.createMessage(this.state);
            }
            this.setState({ body: "" });
        })
        // console.log(this.state);
        // console.log(this.props.match.params.channelId);
        
       
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
                        placeholder={this.props.editing ? "Edit Message" : "Send a message to live chat"}
                    />
                    <button>►</button>
                </form>
                {this.props.editing ? this.renderEditingButtons(): ""}
            </div>
        );
    }

}

export default MessageForm;