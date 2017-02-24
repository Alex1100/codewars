def createPhoneNumber(numbers)
  temp = ["("]
  count = numbers.length - 1
  0.upto(count) do |i|
    if i <= 2
      temp[0] += numbers[i].to_s
    end
    if i == 3
      temp[0] += ') '
    end
    if i >= 3 && i <= 5
      temp[0] += numbers[i].to_s
    end
    if i == 6
      temp[0] += '-'
    end
    if i >= 6 && i <= numbers.length
      temp[0] += numbers[i].to_s
    end
  end
  temp[0]
end
