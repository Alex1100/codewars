def better_than_average(arr, points)
  return arr.inject(:+)/arr.length < points ? true : false
end

#tests
describe "Basic Tests" do
  it"better_than_average([2, 3], 5) should return True" do
    Test.assert_equals(better_than_average([2, 3], 5), true)
  end

  it("better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True") do
    Test.assert_equals(better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
  end
  
  it("better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True") do
    Test.assert_equals(better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true)
  end
end

describe "Random Tests" do
  def solution(arr, points)
    arr.reduce(:+) < points * arr.length
  end

  100.times do
    arr = (1..50).map{rand(0..99)}
    
    points = rand(0..99)
    
    it "better_than_average(#{arr}, #{points}) should return #{solution(arr, points)}" do
      Test.assert_equals(better_than_average(arr, points), solution(arr, points))
    end
  end
end