class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render "/api/users/show"
        else
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}, status: :ok
        else
            render json: ["Not logged in"], status: 404
        end
    end
end
