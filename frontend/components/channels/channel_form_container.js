import { connect } from "react-redux";
import { createChannel } from "../../actions/channel";
import ChannelForm from "./channel_form";

const mSTP = (state) => {
    return {
        channel: {
            name: "",
            description: "",
            dmChannel: false
        },
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        createChannel: (channel, userId) => dispatch(createChannel(channel, userId))
    }
}

export default connect(mSTP, mDTP)(ChannelForm)