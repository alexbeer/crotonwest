class Gallery < ActiveRecord::Base
	belongs_to :user
	has_attached_file :photo, :styles => { :medium => "300x300>", :thumb => "100x100>" },       
:default_url => "missing_:style.png", :default_url => 'missing_:style.png', :storage =>   
:s3, :bucket => "<my_bucket>"
  	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
