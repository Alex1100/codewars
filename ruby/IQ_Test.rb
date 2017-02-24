def iq_test(numbers)
  temp = []
  newNumberString = numbers.split.map {|i| i.gsub(/[^\d,\.]/, '')}.join
  arr = numbers.split(" ").map(&:to_i)
  odd_outlier = arr.reject{|a| a % 2 == 0}.length
  even_outlier = arr.reject{|a| a % 2 != 0}.length
  if odd_outlier < even_outlier
    0.upto(arr.length - 1) do |a|
      if arr[a] % 2 != 0
        temp << a + 1
      end
    end
  else
    0.upto(arr.length - 1) do |a|
      if arr[a] % 2 == 0
        temp << a + 1
      end
    end
  end
  temp.first
end
