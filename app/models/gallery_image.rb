class GalleryImage < ActiveRecord::Base
  belongs_to :gallery

  validates :sequence_num, numericality: true
end