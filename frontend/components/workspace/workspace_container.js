import { connect } from "react-redux";
import Workspace from "./workspace";
import { logout } from "../../actions/session";
import { fetchChannels } from "../../actions/channel";
import { fetchUser } from "../../actions/user";
// import { withRouter } from "react-router";
// import { getUsersChannels } from "../../reducers/selectors"

const mSTP = (state, ownProps) => {
    // console.log(state.entities.users[state.session.id].channelIds[])
    return {
        // channels: getUsersChannels(state.entities.users[state.session.id], state.entities.channels),
        channelId: ownProps.match.params.channelId,
        currentUserId: state.session.id,
        currentUserFirstChannel: state.entities.users[state.session.id].channelIds[0],
        currentUser: state.entities.users[state.session.id]
        // currentUserFirstChannel: [][0]
    }
}
const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        // fetchChannels: () => dispatch(fetchChannels()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(Workspace)