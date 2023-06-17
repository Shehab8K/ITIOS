####### 3 #######
require 'date'
module PersonModule
    class Person
      attr_accessor :fname, :lname, :birth_date, :age
  
      def initialize(fname = "first name", lname = "last name", birth_date = Date.today - 25*365, age = 25)
        @fname = fname
        @lname = lname
        @birth_date = birth_date
        @age = age
      end
  
      def get_person_data
        puts "Enter your first name: "
        @fname = gets.chomp
        puts "Enter your last name: "
        @lname = gets.chomp
        puts "Enter your birth date (yyyy-mm-dd): "
        @birth_date = Date.parse(gets.chomp)
        @age = ((Date.today - @birth_date) / 365).to_i
      rescue ArgumentError => e
        puts "Invalid date format. Please enter the date in yyyy-mm-dd format."
        retry
      end
  
      def welcome
        puts "Welcome, #{@fname} #{@lname}!"
        # puts Date.today
        # puts @birth_date
        # puts (Date.today - @birth_date)
        days = Date.today.day - @birth_date.day
        days = 30 - days.abs if days < 0
        puts "You are #{@age} years, #{(Date.today.month - @birth_date.month)%12} months, and #{days == 1 ? 'day' : 'days'} old."
      end
    end
  end

  include PersonModule

  puts person = Person.new
  puts person.get_person_data
  puts person.welcome