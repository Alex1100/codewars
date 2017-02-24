def sum_array(arr)
  #your code here
  if arr.nil? || arr.length <= 2
    return 0
  else
  a = arr.map{|b| b}.sort
  a.pop
  a.shift
  a.reduce(:+)
  end
end
