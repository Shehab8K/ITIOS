####### 1 #######
class User
    @@name = "user"
    def initialize(name="Name")
      @name=name
      
    end
  
    def self.name
      @@name
    end

    def self.name=(new_name)
      @@name=new_name
    end

    attr_writer :name
  
    attr_reader :name
  
  end
  
  puts User.name

  intial = User.new()
  puts intial.name
  puts intial.name="shehab"
  puts intial.name

  puts User.name="ahmed"

