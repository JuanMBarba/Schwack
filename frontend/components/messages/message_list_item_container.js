import { connect } from "react-redux";
import MessageListItem from "./message_list_item";
import { fetchUser } from "../../actions/user"

const mSTP = (state, ownProps) => {
    return {
        users: state.entities.users,
        message: ownProps.message
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP) (MessageListItem)