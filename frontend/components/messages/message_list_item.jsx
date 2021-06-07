import React from "react";

class MessageListItem extends React.Component {

    componentDidMount(){
        if (this.props.users[this.props.message.userId] === undefined){
            this.props.fetchUser(this.props.message.userId)
        }
    }

    render(){
        const { message } = this.props;
        const user = this.props.users[message.userId];
        return (
            <div className="message-item">
                <div className="message-item-header">
                    {user ? user.displayName : ""} 
                </div>
                <div className="message-item-body">
                    {message.body}
                </div>
                <div className="edit-item">
                    <button className="edit-button">
                        EDIT
                    </button>
                    <button className="delete-button">
                        DELETE
                    </button>
                </div>
            </div>
        )
    }
}

export default MessageListItem;