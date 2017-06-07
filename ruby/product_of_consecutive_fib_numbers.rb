#prompt
# The Fibonacci numbers are the numbers in the following integer sequence (Fn):

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
# such as

# F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
# Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

# F(n) * F(n+1) = prod.
# Your function productFib takes an integer (prod) and returns an array:

# [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
# depending on the language if F(n) * F(n+1) = prod.

# If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

# [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
# F(m) being the smallest one such as F(m) * F(m+1) > prod.

# Examples

# productFib(714) # should return [21, 34, true],
#                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

# productFib(800) # should return [34, 55, false],
#                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
# Notes: Not useful here but we can tell how to choose the number n up to which to go: we can use the "golden ratio" phi which is (1 + sqrt(5))/2 knowing that F(n) is asymptotic to: phi^n / sqrt(5). That gives a possible upper bound to n.

# You can see examples in "Example test".

# References

# http://en.wikipedia.org/wiki/Fibonacci_number

# http://oeis.org/A000045




#solution
def productFib(prod)
    0.upto(prod / 2) do |z|
      if fib(z) * fib(z + 1) == prod then return [fib(z), fib(z + 1), true] end
      if fib(z) * fib(z + 1) > prod then return [fib(z), fib(z + 1), false] end
    end
end


def fib num
  a = 1
  b = 0
  temp = 0

  num.downto(0) do |i|
    temp = a
    a = a + b
    b = temp
  end

 b
end




#tests
Test.assert_equals(productFib(4895), [55, 89, true])
Test.assert_equals(productFib(5895), [89, 144, false])
Test.assert_equals(productFib(74049690), [6765, 10946, true])
Test.assert_equals(productFib(84049690), [10946, 17711, false])
Test.assert_equals(productFib(193864606), [10946, 17711, true])
Test.assert_equals(productFib(447577), [610, 987, false])
Test.assert_equals(productFib(602070), [610, 987, true])
Test.assert_equals(productFib(602070602070), [832040, 1346269, false])
Test.assert_equals(productFib(1120149658760), [832040, 1346269, true])
Test.assert_equals(productFib(256319508074468182850), [12586269025, 20365011074, true])
Test.assert_equals(productFib(203023208030065646654504166904697594722575), [354224848179261915075, 573147844013817084101, true])
Test.assert_equals(productFib(203023208030065646654504166904697594722576), [573147844013817084101, 927372692193078999176, false])

def testProdFib()
    Random.rand(29)
    someFibs = [55,89,144,233,377,610,987,1597,2584,4181,6765,
                10946,17711,28657,46368,75025,121393,196418,317811,514229,
                832040,1346269,2178309,3524578,5702887,9227465,14930352,
                24157817,39088169,63245986]
    10.times do
        rn = Random.rand(29)
        f1 = someFibs[rn];
        f2 = someFibs[rn + 1];
        p = f1 * f2;
        r = [f1, f2, true]
        puts "Random Tests"
        Test.assert_equals(productFib(p), r)
    end
end

testProdFib()
