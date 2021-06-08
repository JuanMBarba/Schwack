import { connect } from "react-redux";
import Workspace from "./workspace";


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