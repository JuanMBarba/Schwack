import { connect } from "react-redux";
import DirectMessage from "./direct_message";
import { fetchUsers } from "../../actions/user";

const mSTP = (state) => {
    return {
        
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(DirectMessage);