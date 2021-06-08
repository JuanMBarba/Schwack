import { connect } from "react-redux";
import Workspace from "./workspace";
import { logout } from "../../actions/session"

const mSTP = (state) => {
    return {
        
    }
}
const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Workspace)