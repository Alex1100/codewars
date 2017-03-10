def invite_more_women(arr)
  men = 0
  women = 0
  
  arr.each do |el|
    if el == -1 then women += 1 elsif el == 1 then men += 1 end
  end

  return women < men ? true : false
end

#tests
describe "Basic Tests" do
Test.assert_equals(invite_more_women([1, -1, 1]),true)
Test.assert_equals(invite_more_women([-1, -1, -1]),false)
Test.assert_equals(invite_more_women([1, -1]),false)
Test.assert_equals(invite_more_women([1, 1, 1]),true)
Test.assert_equals(invite_more_women([]),false)
end

describe "Random Tests" do
def randint(a,b) rand(b-a+1)+a end
def sol(arr) arr.inject(0,:+)>0 end

40.times do
  arr=(0..randint(1,35)).map{-1**randint(0,1)}
  Test.it("Testing for #{arr}") do
  Test.assert_equals(invite_more_women(arr),sol(arr),"It should work for random inputs too")
  end
end
end