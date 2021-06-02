import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session"

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "Sign Up"
    }
}

const mDTP = (dispatch) => {
    return {
        formAction: user => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);