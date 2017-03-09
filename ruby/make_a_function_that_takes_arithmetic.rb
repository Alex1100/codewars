def arithmetic(a, b, operator)
  result = 0
  case operator
  when "add"
    result = a + b
  when "subtract"
    result = a - b
  when "multiply"
    result = a * b
  when "divide"
    result = a/b
  else
    result = "Not a valid operation"
  end
  result
end