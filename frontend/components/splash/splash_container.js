import { connect } from "react-redux";
import { logout } from "../../actions/session";
import Splash from "./splash"

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id),
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP,mDTP)(Splash)