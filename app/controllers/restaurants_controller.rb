class RestaurantsController < ApplicationController
	before_action :authenticate_user!, except: [:index]


	def index
		@restaurants = Restaurant.all

		if @restaurants
			render json: @restaurants, status: 200
		else
			render json: {}, status: 404
		end
	end

	def show
		@restaurant = Restaurant.where(user_id: params[:id]).first
		if @restaurant
			render json: @restaurant, status: 201
		else
			render json: {}, status: 404
		end
	end

	def create
		Restaurant.transaction do

			@restaurant = Restaurant.new(restaurant_params)
			@address = Address.new(address_params)
			@restaurant.address = @address	
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
		params.require(:restaurant).permit(:name, :description, :image, :user_id)
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
