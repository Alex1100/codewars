def min_value(arr, n)
  z = n
  if z == 1 then return arr end
  temp = []
  count = arr.length
  0.upto(count - 2) do |i|
    if i == 0
      z = z - 1
    elsif i > 0
      z = z + 1
    end
    a = arr[i..z]
    if a.length == n
      temp << a.min
    end
  end
  temp
end
