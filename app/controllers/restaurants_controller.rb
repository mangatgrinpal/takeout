class RestaurantsController < ApplicationController
	before_action :authenticate_user!


	def index
		@restaurant = current_user.restaurant
		render json: @restaurant
	end

	def create
		Restaurant.transaction do
			@restaurant = current_user.restaurant.build(restaurant_params)
			@address = Address.new(address_params)
			@restarant.address = @address	
		end
		
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

	def address_params
		params.require(:address).permit(
			:street_address,
			:street_address_2,
			:city,
			:state,
			:zip_code
		)
	end
	
end
