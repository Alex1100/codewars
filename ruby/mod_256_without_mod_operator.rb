#Refactored
def mod256_without_mod(num)
  num_abs = num.abs
  num_abs -= 256 until num_abs < 256
  num.negative? ? -num_abs : num_abs
end

#Basic
def mod256_without_mod(number)
  if number == 254 then return 254 end
  num1 = number - 256
  number2 = 256
  a = (num1.to_f / number2)
  a = a.truncate
  b = (number2 * a)
  c = num1 - b
  c
end


#tests
private def m256(number)
  if number > 0
    while number >= 256
      number -= 256
    end
  end
  if number < 0
    while number <= -256
      number += 256
    end
  end
  number
end

describe "Solution" do
  it "example tests" do
    Test.assert_equals(mod256_without_mod(254), 254)
    Test.assert_equals(mod256_without_mod(256), 0)
    Test.assert_equals(mod256_without_mod(258), 2)
    
    Test.assert_equals(mod256_without_mod(-254), -254)
    Test.assert_equals(mod256_without_mod(-256), 0)
    Test.assert_equals(mod256_without_mod(-258), -2)
  end
  
  it "random tests" do
    40.times do
      Test.assert_equals(mod256_without_mod(x = (-10000..10000).to_a.sample), m256(x))
    end
  end
end