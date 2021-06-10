class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel if @channel
  end

  def speak(data)
    socket = data
    p data
    @channel = Channel.find_by(id: data["message"]["channelId"])
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
