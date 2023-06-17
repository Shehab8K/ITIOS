####### 2 #######
class CalcMath
  def calc(num1, num2, operator)
    validate_number(num1)
    validate_number(num2)
    validate_operator(operator)

    begin
      result = eval("#{num1} #{operator} #{num2}")
      raise ZeroDivisionError if operator == '/' && num2 == 0
      result
    rescue ZeroDivisionError
      raise "Division by zero is not allowed."
    end
  end

  private

  def validate_number(number)
    raise "Invalid number." unless number.is_a?(Numeric)
  end

  def validate_operator(operator)
    valid_operators = ['+', '-', '*', '/']
    raise "Unsupported operator." unless valid_operators.include?(operator)
  end
end


math = CalcMath.new()
puts math.calc(5, 3, '+')   # Output: 8
puts math.calc(10, 4, '-')  # Output: 6
puts math.calc(2, 3, '*')   # Output: 6
puts math.calc(8, 2, '/')   # Output: 4
# puts math.calc(10, 0, '/')  # Raises error: Division by zero is not allowed.
# puts math.calc(5, 3, '$')   # Raises error: Unsupported operator.
puts math.calc("abc", 3, '+')  # Raises error: Invalid number.
