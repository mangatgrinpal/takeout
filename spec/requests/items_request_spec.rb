require 'rails_helper'

RSpec.describe "Items", type: :request do


	it "creates an Item" do
		headers = { "ACCEPT" => "application/json" }
		post "/items", params: {
			item: {
				name: "My Item",
				description: "My description"
			}
		}, headers: headers
		expect(response.content_type).to eq("application/json; charset=utf-8")
		expect(response).to have_http_status(:created)
	end
	
end
