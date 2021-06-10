import { connect } from "react-redux";
import { createChannel } from "../../actions/channel";
import ChannelForm from "./channel_form";

const mSTP = (state) => {
    return {
        channel: {
            name: "",
            description: "",
            dmChannel: false
        }
    }
}

const mDTP = (dispatch) => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel))
    }
}

export default connect(mSTP, mDTP)(ChannelForm)