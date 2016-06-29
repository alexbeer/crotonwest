class GalleriesController < ApplicationController
  before_action :set_gallery, only: [:show, :edit, :update, :destroy]
  before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]









  include S3PresignedPost

  def index
    @Galleries = gallery.all.paginate(:page => params[:page], :per_page => 12)

  end

  def show
  end

  def new
    @gallery = current_user.Galleries.build
    @gallery.images.build
    @s3_presigned_posts = (1..300).map { |i| s3_presigned_post('Galleries') }
  end

  def edit
    @s3_presigned_posts = (1..300).map { |i| s3_presigned_post('Galleries') }
  end

  def create
    @gallery = current_user.Galleries.build(gallery_params)
    if @gallery.save
      redirect_to @gallery
    else
      render action: 'new'
    end
  end

  def update
    if @gallery.update(gallery_params)
      redirect_to @gallery
    else
      render action: 'edit'
    end
  end

  def destroy
    @gallery.destroy
    redirect_to Galleries_url
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gallery
      @gallery = gallery.find(params[:id])
    end

    def correct_user
      @gallery = current_user.Galleries.find_by(id: params[:id])
      redirect_to Galleries_path if @gallery.nil?
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def gallery_params
      params.require(:gallery).permit(:title, :location, images_attributes: [:id, :image_large_url, :image_medium_url, :image_thumb_url, :caption, :sequence_num, :_destroy] )
    end
end