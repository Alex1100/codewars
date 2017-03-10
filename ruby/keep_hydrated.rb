def litres(time)
  (time * 0.5).floor
end

#tests
Test.describe("Basic tests") do
Test.assert_equals(litres(2), 1)
Test.assert_equals(litres(1), 0)
Test.assert_equals(litres(10), 5)
Test.assert_equals(litres(1.4), 0)
Test.assert_equals(litres(12.3), 6)
Test.assert_equals(litres(0.82), 0)
Test.assert_equals(litres(11.8), 5)
Test.assert_equals(litres(1787), 893)
Test.assert_equals(litres(0), 0)
Test.assert_equals(litres(5.5), 2)
end

Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def sol(t) (t/2).to_i end

40.times do
  t=randint(1,10**randint(1,5))/10**randint(1,3)
  Test.it("Testing for #{t}") do
  Test.assert_equals(litres(t),sol(t),"It should work for random inputs too")
  end
end
end