Rails.application.routes.draw do
  root 'train#train', dog_picture: "standing.png", person_picture:"neutral.png"
  post 'train/read'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
