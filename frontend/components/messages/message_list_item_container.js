import { connect } from "react-redux";
import MessageListItem from "./message_list_item";

const mSTP = (state) => {
    return {
        users: state.entities.users
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP) (MessageListItem)