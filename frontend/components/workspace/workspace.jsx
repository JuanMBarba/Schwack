import React from "react"
import { Redirect} from "react-router-dom"
import MessageListContainer from "../messages/message_list_container";
import ChannelListContainer from "../channels/channel_list_container"

class Workspace extends React.Component {
    componentDidMount() {
        this.props.fetchChannels()
    }

    render(){
        // console.log(this.props.channelId)
        return (
            <div className="workspace-page">
                { this.props.channelId ? "" : <Redirect to="/channels/1" />}
                {/* <Redirect to="/channels/1" /> */}
                {/* Need headers here */}
                <div className="workspace-header">
                    <button className="header-button" onClick={() => this.props.logout()}>LOGOUT</button>
                </div>
                <div className="workspace-body">
                    <ChannelListContainer />
                    <MessageListContainer />
                </div>
            </div>
        )
    }
}

export default Workspace;