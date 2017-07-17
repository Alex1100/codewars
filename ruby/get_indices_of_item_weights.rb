# Description:

# Get Indices of Item Weights

# Given a package with a weight limit limit and an array arr of item weights, implement a method (ruby)/function (javascript) that finds two items whose sum of weights equals the weight limit limit. Your method/function should return a pair ex. [i, j] of the indices of the item weights. If such a pair doesn’t exist, return nil/null.

# Challenge Complete in under
# O(n^2) a.k.a. quadratic time complexity

# Constraints: Returned Array elements could not be the same index position so
# [1, 1]
# would not be acceptable...

# Return the first pair, a.k.a lexographically speaking, that sums up to the limit

# [input] array.integer arr 2 ≤ arr.length ≤ 100

# [input] integer limit

# [output] array.integer



#SOLUTION
def get_indices_of_item_weights(arr, limit)
  checked = {}
  temp = []
  arr.each do |num|
    a = limit - num
    if arr.include?(a)
      checked[a] = a
    end

    if checked[a] != nil && checked[a] + num === limit && arr.index(checked[a]) != arr.index(num)
      temp.push([arr.index(num), arr.index(checked[a])])
    end
  end

  temp.length > 0 ? temp[0] : nil
end



#TESTS
require 'timeout'

options = []
results = []

def checker(arr, limit)
  checked = {}
  temp = []
  arr.each do |num|
    a = limit - num
    if arr.include?(a)
      checked[a] = a
    end

    if checked[a] != nil && checked[a] + num === limit && arr.index(checked[a]) != arr.index(num)
      temp.push([arr.index(num), arr.index(checked[a])])
    end
  end

  temp.length > 0 ? temp[0] : nil
end

z = rand(1..40)
c = rand(1..8)
r = rand(4..12)
x = 0
limi = 0

while options.length < 8
  options << [[]]
  while checker(options[x][0], z) == nil
    options[x][0] << c << r
    c = c + 1
    if c % 2 == 0 then r = r + 3 end
    z = z + 2
    limi = z
  end
  options[x][1] = limi
  x = x + 1
end

options << [[1, 2, 5, 3], 44]
options << [[1, 2, 5, 3], 2]

options.each do |opt|
    results << checker(opt[0], opt[1])
end


describe "Uniqueness Test" do
  it "should test to see indexes in the result array are unique" do
    0.upto(options.length - 1) do |l|
      if get_indices_of_item_weights(options[l][0], options[l][1]) != nil then
        Timeout::timeout(5) {
          Test.assert_equals(get_indices_of_item_weights(options[l][0], options[l][1])[0] != get_indices_of_item_weights(options[l][0], options[l][1])[1], true, "Indexes could not be the same. They must be different elements within the same input array. #{get_indices_of_item_weights(options[l][0], options[l][1])} is not a valid solution.")
        }
      end
    end
  end
end

describe "Time Test" do
  it "should test to see if it executes within less than 5 seconds" do
    0.upto(options.length - 1) do |i|
      Timeout::timeout(5) {
        Test.assert_equals(get_indices_of_item_weights(options[i][0], options[i][1]), results[i], "Failed Tests, Took longer than 5 seconds :(")
      }
    end
  end
end

describe "Solution" do
  it "should test for correct indices or nil if none found within input array" do
    0.upto(options.length - 1) do |i|
      Timeout::timeout(5) {
        Test.assert_equals(get_indices_of_item_weights(options[i][0], options[i][1]), results[i], "Failed Tests")
      }
    end
  end
end
