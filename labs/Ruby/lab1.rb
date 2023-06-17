#### 1 ####
def string_multiply x
    i = 1
    until i > x
        puts "a" * i
        i+=1
    end
end
string_multiply 5
# string_multiply -5

#### 2 ####
def string_checker text
    my_string = text.strip
    puts my_string.start_with?("if")
end
string_checker "  if shehab" ## Trim and True
string_checker "  no shehab" ## Trim and False

#### 3 ####
def reverse text
    text[0], text[-1] = text[-1], text[0]
    puts text
end
reverse "Cool"

#### 4 ####
def start_end_character text
    text = text.strip
    if text.size > 1
        main = text[-1]
        main << text
        main << text[-1]
        puts main
    end
    puts "String must be more than 1 letter"
end
start_end_character "abcd" #Output => dabcdd

#### 5 ####
def leap_year year
    if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
      puts "#{year} is a leap year."
    else
      puts "#{year} is not a leap year."
    end
  end
  
leap_year 1600  #1600 is a leap year.
leap_year 1500  #1500 is not a leap year.

#### 6 ####
def reverse_array(arr)
  new_arr = arr.reverse
  return new_arr
end

arr = [1, 2, 3]
result = reverse_array(arr)
puts result



#### 7 ####
def sum_except_17(array)
  sum = 0
  skip_next = false

  array.each do |num|
    if num == 17
      # Skip 17 turn
      break
    else
      sum += num
    end
  end

  return sum
end

arrays = [[3, 5, 17, 6], [3, 5, 1, 17], [3, 17, 1, 7], []]

arrays.each do |array|
  puts sum_except_17(array)
end


