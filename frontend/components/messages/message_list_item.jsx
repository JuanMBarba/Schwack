import React from "react";

class MessageListItem extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         user: {}
    //     }
    // }

    componentDidMount(){
        this.props.fetchUser(this.props.message.userId)
    }

    render(){
        const { message } = this.props;
        const user = this.props.users[message.userId];
        // console.log(message);
        // console.log(user);
        return (
            <div className="message-item">
                <div className="message-item-header">
                    {user ? user.displayName : ""} 
                </div>
                <div className="message-item-body">
                    {message.body}
                </div>
            </div>
        )
    }
}

export default MessageListItem;