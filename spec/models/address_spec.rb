require 'rails_helper'

RSpec.describe Address, type: :model do
	subject {
		described_class.new(
			street_address: "123 Fake Street",
			street_address_2: "apt 100",
			city: "Fake City",
			state: "FA",
			zip_code: "00000"
		)
	}

	it "is valid with valid attributes" do
		expect(subject).to be_valid
	end

	it "is valid without a street address 2" do
		subject.street_address_2 = ""
		expect(subject).to be_valid
	end

	it "is not valid without a street address" do
		subject.street_address = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a city" do
		subject.city = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a state" do
		subject.state = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a zip code" do
		subject.zipe_code = nil
		expect(subject).to_not be_valid
	end
end
