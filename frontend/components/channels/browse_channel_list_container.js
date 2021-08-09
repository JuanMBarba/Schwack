import { connect } from "react-redux";
// import { createMembership } from "../util/membership_api";
import BrowseChannelList from "./browse_channel_list";
import * as MembershipApiUtil from "../../util/membership_api";
import { fetchUser } from "../../actions/user"

//mSTP
const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels),
        usersChannels: state.entities.users[state.session.id].channelIds,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        createMembership: (userId, channelId) => MembershipApiUtil.createMembership({userId, channelId}).then(() => dispatch(fetchUser(userId)))
    }
}

export default connect(mSTP, mDTP)(BrowseChannelList)