def solution(digits)
  array_of_string_of_digits = digits.to_s.split('')
  temp = []
  temp2 = []
  tempString = ''
  counter = array_of_string_of_digits.length
  0.upto(counter - 1) do |i|
    temp << array_of_string_of_digits[i]
    if temp.length == 5
      0.upto(temp.length - 1) do |h|
        tempString += temp[h]
        if tempString.length == 5
          a = tempString.to_i
          temp2 << a
        end
      end
      tempString = ''
      temp = []
    end
  end
  temp2.flatten.max
end
