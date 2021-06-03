class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render "api/messages/index"
    end

    def create
        @message = Message.new(message_params)

        if @message.save
            render "api/messages/show"
        else
            render json: @message.errors.full_messages, status: 422
        end

    end

    def update
    end

    def destroy
    end

    private
    def message_params
        params.require(:message).permit(:user_id, :channel_id, :body)
    end
end
