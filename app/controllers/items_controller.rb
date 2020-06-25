class ItemsController < ApplicationController
	def index
	end

	def create
		@item = Item.new(item_params)

		if @item.save
			render json: @item, status: 201
		else
			render json: @item.errors.messages, status: 400
		end
	end

	def destroy
	end

	private

	def item_params
		params.require(:item).permit(:name, :description)
	end
end
