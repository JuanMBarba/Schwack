import React from "react";
import MessageFormContainer from "./message_form_container";
import formatDate from "../../util/date_util";

class MessageListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.editSwitch = this.editSwitch.bind(this);
    }

    editSwitch(e){
        e.preventDefault();
        let editing = this.state.editing;
        this.setState({editing: !editing});
    }

    componentDidMount(){
        if (this.props.users[this.props.message.userId] === undefined){
            this.props.fetchUser(this.props.message.userId)
        }
    }

    renderEditItem(){
        const { message, deleteMessage } = this.props;
        return (
            <div className="edit-item">
                <button onClick={this.editSwitch} className="edit-button">
                    EDIT
                </button>
                <button onClick={() => deleteMessage(message.id)} className="delete-button">
                    DELETE
                </button>
            </div>
        )
    }

    initialRender(){
        const { message } = this.props;
        const user = this.props.users[message.userId];
        return (
            <div className="message-item">
                <div className="message-item-header">
                    {user ? user.displayName : ""}
                    <strong>{formatDate(new Date(message.updatedAt))}</strong>
                </div>
                <div className="message-item-body">
                    {message.body}
                </div>
                {this.props.currentUserId === message.userId ? this.renderEditItem() : ""}
            </div>
        )
    }

    editingRender(){
        const { message } = this.props;
        const user = this.props.users[message.userId];
        return (
            <div className="message-item editing">
                <div className="message-item-header">
                    {user ? user.displayName : ""}
                </div>
                <MessageFormContainer message={message} editSwitch={this.editSwitch}/>
            </div>
        )

    }

    render(){
        // console.log(this.state.editing);
        return (
            this.state.editing ? this.editingRender() : this.initialRender()
        )
    }
}

export default MessageListItem;