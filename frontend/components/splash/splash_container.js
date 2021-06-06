import { connect } from "react-redux";
import { login, logout } from "../../actions/session";
import Splash from "./splash"

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id),
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        demoLogin: () => dispatch(login({
            displayName: "Demo User",
            email: "demo@mail.com",
            password: "123456"
        })),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP,mDTP)(Splash)