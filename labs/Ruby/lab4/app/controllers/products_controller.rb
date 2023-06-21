class ProductsController < ApplicationController


  before_action :authenticate_user!

  def index
    @products = Product.all
  end
  
  def show
    @product = Product.find(params[:id])
  end

  def new 
    @product = Product.new

  end

  def create 
    @product = Product.new(product_params)
    
    if @product.save
      ProductNotifierMailer.new_product_mail.deliver_later
      redirect_to @product
    else
      @product.errors.full_messages
      # render :new, status: :unprocessable_entity 
    end  
  end 

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    
    if @product.update(product_params)
      redirect_to @product
    else
      render :new, status: :unprocessable_entity 
    end  
  
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to root_path, status: :see_other
  end  

  private
    def product_params
      params.require(:product).permit(:name, :image, :price, :description,:user_id)
    end
end
