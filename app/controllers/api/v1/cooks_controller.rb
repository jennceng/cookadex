class Api::V1::CooksController < ApplicationController
  def index
    render json: Cook.all
  end
end
