import {connect} from "react-redux";
import { fetchChannels } from "../../actions/channel"
import ChannelList from "./channel_list";
import {getUsersChannels} from "../../reducers/selectors"

const mSTP = (state) => {
    return {
        channels: getUsersChannels(state.entities.users[state.session.id], state.entities.channels)
        // channels: state.entities.channels
    }
}

const mDTP = (dispatch) => {
    return {
        fetchChannels: () => dispatch(fetchChannels())
    }
}

export default connect(mSTP, mDTP)(ChannelList)