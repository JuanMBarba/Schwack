import { connect } from "react-redux";
import DirectMessage from "./direct_message";
import { fetchUsers } from "../../actions/user";
import { searchUsers } from "../../reducers/selectors";

const mSTP = (state) => {
    return {
        searchUsers:(searchTerm) => searchUsers(Object.values(state.entities.users), searchTerm, state.session.id)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(DirectMessage);