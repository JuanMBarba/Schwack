import * as MessageAPIUtil from "../util/message_api";
import selectSpeak from "../util/speak"

export const RECEIVE_MESSAGES =  "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE =  "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

//Action Creators

const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

export const receiveMessage = (message) => {
    // debugger
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const removeMessage = (messageId) => {
    return {
        type: REMOVE_MESSAGE,
        messageId
    }
}

const receiveMessageErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    }
}

//Thunk Action Creators

export const fetchMessages = () => dispatch =>  {
    return MessageAPIUtil.fetchMessages()
        .then(messages => dispatch(receiveMessages(messages)))
}

export const createMessage = (message, channelId) => dispatch =>  {
    return MessageAPIUtil.createMessage(message)
        .then(message => dispatch(receiveMessage(message)))
        .then(data => selectSpeak(data, channelId))
        .fail(errors => dispatch(receiveMessageErrors(errors.responseJSON)))
}

export const updateMessage = (message, channelId) => dispatch =>  {
    return MessageAPIUtil.updateMessage(message)
        .then(message => dispatch(receiveMessage(message)))
        .then(data => selectSpeak(data, channelId))
        .fail(errors => dispatch(receiveMessageErrors(errors.responseJSON)))
}

export const deleteMessage = (messageId, channelId) => dispatch =>  {
    return MessageAPIUtil.deleteMessage(messageId)
        .then(message => dispatch(removeMessage(message.id)))
        .then(data => selectSpeak(data, channelId))
        .fail(errors => dispatch(receiveMessageErrors(errors.responseJSON)))
}

