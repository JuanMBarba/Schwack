class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    #CRRLLL
    helper_method :current_user, :logged_in?
    before_action :underscore_params!

    def underscore_params!
        underscore_hash = -> (hash) do
            hash.transform_keys!(&:underscore)
            hash.each do |key, value|
                if value.is_a?(ActionController::Parameters)
                    underscore_hash.call(value)
                elsif value.is_a?(Array)
                    value.each do |item|
                        next unless item.is_a?(ActionController::Parameters)
                        underscore_hash.call(item)
                    end
                end
            end
        end
        underscore_hash.call(params)
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        render json: ["Invalid credentials"], status: 401 unless logged_in?
    end

    def require_logout
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout
        @current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

end
