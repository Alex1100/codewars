require 'prime'
def odd_digit_primes_only(n)
  list = Prime.first(n)
  odd_dig_primes = list.select {|num| num.to_s.chars.all? {|char| char.to_i.odd?}}
  count = odd_dig_primes.select {|num| num < n}.count
  max_under_n = odd_dig_primes.select {|num| num < n}.max
  min_above_n = odd_dig_primes.select {|num| num > n}.min

  [count, max_under_n, min_above_n]
end

#tests
Test.describe("only_oddDigPrimes") do
    Test.it("Basic Tests") do
        list = [20, 40, 55, 60, 100]
        results = [[7, 19, 31], [9, 37, 53], [10, 53, 59], [11, 59, 71], [15, 97, 113]]
        for i in (0...list.length) do
            puts ("n = " + list[i].to_s)
            Test.assert_equals(only_oddDigPrimes(list[i]), results[i])
        end
    end
end
Test.describe("only_oddDigPrimes") do
    Test.it("Intermediate Tests") do
        list = [80, 100, 200, 300, 400, 500, 750, 1000, 2000, 3000, 4000, 5000]
        results = [[14, 79, 97], [15, 97, 113], [27, 199, 311], [27, 199, 311], \
                    [37, 397, 557], [37, 397, 557], [45, 739, 751], [57, 997, 1117], [85, 1999, 3119],\
                    [85, 1999, 3119], [113, 3931, 5113], [113, 3931, 5113]]
        for i in (0...list.length) do
            puts ("n = " + list[i].to_s)
            Test.assert_equals(only_oddDigPrimes(list[i]), results[i])
        end
    end
end
Test.describe("only_oddDigPrimes") do
    Test.it("Challenging Tests") do
        list = [6000, 10000, 15000, 20000, 25000, 45000, 50000, 75000, 100000]
        results = [[135, 5953, 7151], [182, 9973, 11113], [238, 13999, 15131], \
                    [322, 19997, 31139], [322, 19997, 31139], [452, 39979, 51131], [452, 39979, 51131],\
                    [606, 73999, 75133], [790, 99991, 111119]]
        for i in (0...list.length) do
            puts ("n = " + list[i].to_s)
            Test.assert_equals(only_oddDigPrimes(list[i]), results[i])
        end
    end
end
