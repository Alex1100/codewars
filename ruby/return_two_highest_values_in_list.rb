#Refactored
def two_highest(list)
  list.class != Array ? false : list.max(2)
end

#Basic
def two_highest(list)
  if list.length == 0 then return [] end
  if !list.kind_of?(Array) then return false end
  list = list.sort.uniq
  return list.length > 1 ? [list[-1], list[-2]] : [list.last]
end


#tests
describe "Solution" do
  def my_two_highest(list)
    return list.class == Array ? list.uniq.sort.reverse[0..1] : false
  end

  0.upto(198) do
    rlist = (0...100000).to_a.sample(rand(699 + 1))
    Test.assert_equals(two_highest(rlist), my_two_highest(rlist))
  end

  Test.assert_equals(two_highest([]), [])
  Test.assert_equals(two_highest("cool"), false)
end
