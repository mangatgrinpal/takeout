class RestaurantSerializer < ActiveModel::Serializer
	include Rails.application.routes.url_helpers

  attributes :id, :name, :description, :image

  has_one :address



  def image
  	return unless object.image.attached?


  	object.image.blob.attributes # gets the attributes of the blob associated with the object's image
  				.slice('filename', 'byte_size') # returns just the filename and byte size attributes
  				.merge(url: image_url) # merges the image_url with filename and byte size
  				.tap { |attrs| attrs['name'] = attrs.delete('filename')}

  				# tap method allows reader to not have to read what is inside block to know outcome
  				# 'filename' is replaced with 'name'
  end

  def image_url
  	url_for(object.image)
  end
end
