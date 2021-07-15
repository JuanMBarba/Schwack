import * as ChannelAPIUtil from "../util/channel_api";
import * as MembershipAPUUtil from "../util/membership_api";
import { fetchUser} from "../actions/user"
import createConnection from "../util/channel_subscribe";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

//Action Creators

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}
export const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const removeChannel = (channelId) => {
    return {
        type: REMOVE_CHANNEL,
        channelId
    }
}

const receiveChannelErrors = (errors) => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
}

//Thunk Action Creators

export const fetchChannels = () => dispatch => {
    return ChannelAPIUtil.fetchChannels()
        .then(channels => dispatch(receiveChannels(channels)))
}

export const fetchChannel = (channelId) => dispatch => {
    return ChannelAPIUtil.fetchChannel(channelId)
        .then(channel => dispatch(receiveChannel(channel)))
}

export const createChannel = (channel, userId) => dispatch => {
    return ChannelAPIUtil.createChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
        .then(action => MembershipAPUUtil.createMembership({userId, channelId: action.channel.id}))
        .then(membership => createConnection(userId, membership.channelId, dispatch))
        .then(() => dispatch(fetchUser(userId)))
        .fail(errors => dispatch(receiveChannelErrors(errors.responseJSON)))
}

export const updateChannel = (channel) => dispatch => {
    return ChannelAPIUtil.updateChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
        .fail(errors => dispatch(receiveChannelErrors(errors.responseJSON)))
}

export const deleteChannel = (channelId) => dispatch => {
    return ChannelAPIUtil.deleteChannel(channelId)
        .then(channel => dispatch(removeChannel(channel)))
        .fail(errors => dispatch(receiveChannelErrors(errors.responseJSON)))
}
