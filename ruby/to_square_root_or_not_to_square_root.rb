def square_or_square_root(arr)
  temp = []
  arr.each do |a|
    if Math.sqrt(a).to_s[-1] == '0'
      temp << Math.sqrt(a).to_i
    else
      temp << a * a
    end
  end
  temp
end
