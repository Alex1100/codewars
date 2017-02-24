def digitize(n)
  arr = n.to_s.reverse.split('')
  temp = []
  arr.each do |i|
    temp << i.to_i
  end
  temp
end
