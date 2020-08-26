class ItemsController < ApplicationController
	before_action :authenticate_user!

	def index
		@items = Restaurant.where(id:params[:restaurant]).first.items


		if @items
			render json: @items, status: 200
		else
			render json: @items.errors.messages, status: 404
		end
	end

	def create


		Item.transaction do
			@item = Item.new(item_params)
			@restaurant = Restaurant.where(id: params[:restaurant]).first
			@menu_item = MenuItem.create!(item: @item, restaurant: @restaurant)
		end

		
		if @item.save
			render json: @restaurant.items, status: 201
		else
			render json: @item.errors.messages, status: 400
		end
	end

	def destroy
	end

	private

	def item_params
		params.require(:item).permit(:name, :description, :price, :image)
	end
end
