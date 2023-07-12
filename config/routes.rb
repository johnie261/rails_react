Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'root#index'
  
  get 'greetings/random_greeting'
    #get 'greetings/random_greeting', to: 'greetings#random_greeting'
    #get 'greetings/index', to: 'greetings#index'
     # Route all other requests to your React app
  get '*path', to: 'root#index'

end
