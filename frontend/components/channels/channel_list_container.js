import {connect} from "react-redux";
import { fetchChannels } from "../../actions/channel"
import ChannelList from "./channel_list";

const mSTP = (state) => {
    return {
        channels: state.entities.channels
    }
}

const mDTP = (dispatch) => {
    return {
        fetchChannels: () => dispatch(fetchChannels())
    }
}

export default connect(mSTP, mDTP)(ChannelList)