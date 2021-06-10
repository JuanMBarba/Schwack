import React from "react"
import { Redirect} from "react-router-dom"
import MessageListContainer from "../messages/message_list_container";
import ChannelListContainer from "../channels/channel_list_container"
import ChannelFormContainer from "../channels/channel_form_container"
import { defaultMemberships } from "../../util/membership_api";

class Workspace extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalActive: false
        }
        this.switchModalActivity = this.switchModalActivity.bind(this);
    }

    switchModalActivity(){
        this.setState({modalActive: !this.state.modalActive});//May be a problem
    }

    componentDidMount() {
        // this.props.fetchChannels();
        // this.props.fetchUser(this.props.currentUserId);
        if (!this.props.currentUserFirstChannel){
            defaultMemberships(this.props.currentUserId)
                .then(() => this.props.fetchUser(this.props.currentUserId))
                .then(() => this.setState({}))
        }
    }
    renderRedirect(){
        if (this.props.channelId){
            return (<Redirect to={`/channels/${this.props.channelId}`} />)
        }
        else if (this.props.currentUserFirstChannel){
            return <Redirect to={`/channels/${this.props.currentUserFirstChannel}`} />
        }
        else{
            return ""
        }
    }

    render(){
        // console.log(this.props.channelId)
        return (
            <div className="workspace-page">
                {/* { this.props.channelId ? "" : <Redirect to="/channels/1" />} */}
                {/* {console.log(this.props.currentUserFirstChannel)} */}
                {/* { this.props.currentUserFirstChannel ? <Redirect to={`/channels/${this.props.currentUserFirstChannel}`} /> : ""} */}
                {this.renderRedirect()}
                {/* <Redirect to="/channels/1" /> */}
                {/* Need headers here */}
                <div className="workspace-header">
                    <button className="header-button" onClick={() => this.props.logout()}>LOGOUT</button>
                </div>
                <div className="workspace-body">
                    <ChannelListContainer switchModalActivity={this.switchModalActivity} />
                    <MessageListContainer />
                </div>
                {/* <div className=".modal">
                    <div class="modal-screen"></div>
                </div> */}
                <ChannelFormContainer modalActive={this.state.modalActive} switchModalActivity={this.switchModalActivity}/>
            </div>
        )
    }
}

export default Workspace;