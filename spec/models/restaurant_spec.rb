require 'rails_helper'

RSpec.describe Restaurant, type: :model do

	subject { 
		described_class.new(
      name: "Anything",
			description: "Lorem Ipsum"
    )
	}

  context "valid attributes" do
  	it { expect(subject).to be_valid }
  end

  context "without a name" do
  	it { 
      subject.name = nil
    	expect(subject).to_not be_valid
    }
  end

  context "without a description" do
    it {
      subject.description = nil
      expect(subject).to_not be_valid  
    }
  end
end
