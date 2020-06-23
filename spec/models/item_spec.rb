require 'rails_helper'

RSpec.describe Item, type: :model do

	subject {
		described_class.new(
			name: "Chicken",
			description: "This chicken good"
		)
	}

	it "is valid with valid attribute" do
		expect(subject).to be_valid
	end

	it "is not valid without a name" do
		subject.name = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a description" do
		subject.description = nil
		expect(subject).to_not be_valid
	end
end
