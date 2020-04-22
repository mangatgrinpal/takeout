Rails.application.routes.draw do
  root 'static_pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  #IMPORTANT:
  #this 'mathch' must be the last route in routes.rb

  match '*path', to: 'static_pages#index', via: :all, constraints: lambda {
  	|req| req.path.exclude? 'rails/active_storage'
  }
end
