class RestaurantsController < ApplicationController
	def index
	end

	def create
		@restaurant = Restaurant.new(restaurant_params)
		if @restaurant.save
			render json: @restaurant, status: 201
		else
			render json: @restaurant.errors.messages, status: 400
		end
	end

	def destroy
	end

	private

	def restaurant_params
		params.require(:restaurant).permit(:name, :description)
	end
	
end
