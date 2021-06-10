import { connect } from "react-redux";
import Workspace from "./workspace";
import { logout } from "../../actions/session";
import { fetchChannels } from "../../actions/channel";
import { fetchUser } from "../../actions/user";
// import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    return {
        getUsersChannels: () => getUsersChannels(state.entities.users[state.session.id], state.entities.channels),
        channelId: ownProps.match.params.channelId,
        currentUserId: state.session.id
    }
}
const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchChannels: () => dispatch(fetchChannels()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(Workspace)