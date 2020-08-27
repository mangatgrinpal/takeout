require 'rails_helper'

RSpec.describe Customer, type: :model do
	subject {
		described_class.new(
			first_name: "Joe",
			last_name: "Blow",
			email: "joeblow@mail.com",
			phone_number: "1234567890"
		)
	}

	it "is valid with valid attributes" do
		expect(subject).to be_valid
	end
end
