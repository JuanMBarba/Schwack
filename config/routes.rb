Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :update, :destroy]
  end

  root "static_pages#root"
  mount ActionCable.server, at: '/cable'
end
