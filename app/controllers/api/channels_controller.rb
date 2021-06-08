class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
        render "api/channels/index"
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render "api/channels/show"
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel.destroy
            render "api/channels/show"
        else
            render json: ["Channel does not exist"], status: 404
        end
    end

    private 
    def channel_params
        params.require(:channel).permit(:name, :description, :dm_channel)
    end
end
