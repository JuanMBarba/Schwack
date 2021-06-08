import * as ChannelAPIUtil from "../util/channel_api",

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS"

//Action Creators

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}
const receiveChannel = (channel) => {
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