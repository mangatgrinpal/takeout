require 'rails_helper'

RSpec.describe Order, type: :model do

	subject {
		described_class.new(
			order_number: "20200827-1"
		)
	}


	it "is valid with valid attribute" do
		expect(subject).to be_valid
	end

	it "is not valid without an order number" do
		subject.order_number = nil
		expect(subject).to_not be_valid
	end
end
