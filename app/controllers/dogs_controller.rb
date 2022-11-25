class DogsController < ApplicationController

    def index 
        render json: Dog.all, except: [:created_at, :updated_at]
    end

    def show
        dog = Dog.find_by(id: params[:id])
            if dog
                render json: dog
            else
                render json: { error: "Dog not found" }, status: :not_found
            end
    end

    def create
        dog = Dog.create(dog_params)
        render json: dog, status: :created
    end

    def update
        dog = Dog.find_by(id: params[:id])
        dog.update(dog_params)
        render json: dog
    end

    def destroy
        dog = Dog.find_by(id: params[:id])
        dog.destroy
        head :no_content
    end

    private
    def dog_params
        params.permit(:name, :age, :breed, :image)
    end

end
