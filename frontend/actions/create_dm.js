import { createChannel } from "../util/channel_api";
import { fetchChannel, receiveChannel } from "./channel";
import { createMessage } from "./message";
import { fetchUser } from "./user";
import createConnection from "../util/channel_subscribe";
import { createMembership } from "../util/membership_api";

export const createDM = (members, message) => dispatch => {
    let userId = members[0];
    let channel = {
        name: members.sort().toString(),
        description: "",
        dmChannel: true
    }

    let channelId;
    return createChannel(channel)
        .then(channel => {
            channelId = channel.id;
            return dispatch(receiveChannel(channel)); 
        })
        .then(action => createMembership({ userId, channelId: action.channel.id }))
        .then(membership => createConnection(userId, membership.channelId, dispatch))
        .then(() => dispatch(fetchUser(userId)))
        .then(() => {
            message["channelId"] = channelId;
            return dispatch(createMessage(message));
        })
        .then(() => {
            members.forEach(member => {
                if(member !== userId){
                    createMembership({userId: member, channelId})
                        .then(() => dispatch(fetchChannel(channelId)))
                }
            });
            return channelId;
        })
        .fail(errors => dispatch(receiveChannelErrors(errors.responseJSON)))
}