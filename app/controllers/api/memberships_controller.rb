class Api::MembershipsController < ApplicationController
    def show
        @membership = Membership.find_by(id: params[:id])
        render "api/memberships/show"
    end

    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            render "api/memberships/show"
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @membership = Membership.find_by(id: params[:id])
        if @membership.destroy
            render "api/memberships/show"
        else
            render json: ["Membership does not exist"], status: 404
        end
    end

    private
    def membership_params
        params.require(:membership).permit(:user_id, :channel_id)
    end
end
