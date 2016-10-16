Rails.application.routes.draw do
  root "cooks#index"

  resources :cooks, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :cooks, only: [:index]
    end
  end
end
