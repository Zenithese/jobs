Rails.application.routes.draw do
  root 'events#index'

  # mount ActionCable.server => '/cable'
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :saved_jobs, only: [:index, :create, :destroy]
    resources :jobs, only: [:index, :show]
  end
end
