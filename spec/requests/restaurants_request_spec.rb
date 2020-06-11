require 'rails_helper'

RSpec.describe "Restaurants", type: :request do

	it "creates a Restaurant" do
		headers = { "ACCEPT" => "application/json" }
		post "/restaurants", params: { 
													restaurant: { name: "My Restaurant", description: "My description"} 
													}, headers: headers
		expect(response.content_type).to eq("application/json; charset=utf-8")
		expect(response).to have_http_status(:created)
	end


end
