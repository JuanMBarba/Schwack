import { connect } from "react-redux";
import Workspace from "./workspace";
import { logout } from "../../actions/session";
// import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    return {
        // getUsersChannels: () => getUsersChannels(state, state.session.id),
        channelId: ownProps.match.params.channelId
    }
}
const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Workspace)