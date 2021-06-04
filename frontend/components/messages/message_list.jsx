import React from "react";

class MessageList extends React.Component{

    componentDidMount(){
        this.props.fetchMessages();
    }

    render(){
        return null;
    }
}

export default MessageList;