import {connect} from "react-redux";
import { fetchChannels } from "../../actions/channel"
import ChannelList from "./channel_list";
import {getUsersChannels, getDMChannelUserNames} from "../../reducers/selectors"

const mSTP = (state) => {
    // console.log(state.entities.users);
    return {
        channels: getUsersChannels(state.entities.users[state.session.id], state.entities.channels),
        getDMDisplayNames: (userIds) => getDMChannelUserNames(state.entities.users, userIds, state.session.id)
        // channels: state.entities.channels
    }
}

const mDTP = (dispatch) => {
    return {
        fetchChannels: () => dispatch(fetchChannels())
    }
}

export default connect(mSTP, mDTP)(ChannelList)