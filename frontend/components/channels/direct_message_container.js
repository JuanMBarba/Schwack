import { connect } from "react-redux";
import DirectMessage from "./direct_message";
import { fetchUsers } from "../../actions/user";
import { searchUsers } from "../../reducers/selectors";
import { createDM } from "../../actions/create_dm";

const mSTP = (state) => {
    return {
        searchUsers:(searchTerm) => searchUsers(Object.values(state.entities.users), searchTerm, state.session.id),
        message: {
            userId: state.session.id,
            channelId: null,
            body: ""
        },
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        createDM: (members, message) => dispatch(createDM(members, message))
    }
}

export default connect(mSTP, mDTP)(DirectMessage);