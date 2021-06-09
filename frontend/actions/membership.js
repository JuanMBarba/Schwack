import * as MembershipApiUtil from "../util/membership_api";

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP"
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP"

//Action Creators

const receiveMembership = (membership) => {
    return {
        type: RECEIVE_MEMBERSHIP,
        membership
    }
}

const removeMembership = ( membership ) => {
    return {
        type: REMOVE_MEMBERSHIP,
        membership
    }
}

//Thunk Action Creators

export const createMembership = (membership) => dispatch => {
    return MembershipApiUtil.createMembership(membership)
        .then(membership => dispatch(receiveMembership(membership)))
}

export const deleteMembership = (membershipId) => dispatch => {
    return MembershipApiUtil.deleteMembership(membershipId)
        .then(membership => dispatch(removeMembership(membership)))
}