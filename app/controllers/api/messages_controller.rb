class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render "api/messages/index"
    end

    def create
        
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
