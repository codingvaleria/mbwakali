require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

dog1 = Dog.create(name:Faker::Creature::Dog.name, age:Faker::Creature::Dog.age, breed: Faker::Creature::Dog.breed, image:"https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60")
dog1 = Dog.create(name:Faker::Creature::Dog.name, age:Faker::Creature::Dog.age, breed: Faker::Creature::Dog.breed, image:"https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
dog1 = Dog.create(name:Faker::Creature::Dog.name, age:Faker::Creature::Dog.age, breed: Faker::Creature::Dog.breed, image:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWdseSUyMGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
dog1 = Dog.create(name:Faker::Creature::Dog.name, age:Faker::Creature::Dog.age, breed: Faker::Creature::Dog.breed, image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dWdseSUyMGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
