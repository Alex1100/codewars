def meeting(rooms, number)
  return 'Game On' if number == 0
  t = 0
  c = []
  rooms.each do |a|
    b = a[1] -a[0].length
    t = t + b if b > 0
    h = t - number  if t > number
    b = b - h if t > number
    c << b if b > 0
    c << 0 if b <= 0
    break if t >= number
  end
  if t < number
    return  'Not enough!'
  else
    return c
  end
end
