class Cook < ActiveRecord::Base
  validates :first_name, presence: true
  validates :phone_number, presence: true 
end
