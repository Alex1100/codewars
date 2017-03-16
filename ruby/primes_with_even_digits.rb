require 'prime'
#Refactored
def f n
  Prime.take_while{|pr|pr < n}.group_by{|pr|pr.to_s.scan(/[24680]/).size}.max.last.max
end



#Basic
def f(num)
  temp = []
  new_hash = {}
  count = 0

  Prime.each(num) do |prime|
    prime.to_s.split('').each do |x|
      if x.to_i.even? then count += 1 end
    end

    if new_hash[count].nil? then new_hash[count] = [] end
    new_hash[count] << prime
    count = 0
  end

  if new_hash.sort_by {|key, value| key}.reverse[0][1].last == num
    return new_hash.sort_by {|key, value| key}.reverse[0][1][new_hash.sort_by {|key, value| key}.reverse[0][1].length - 2]
  else
    return new_hash.sort_by {|key, value| key}.reverse[0][1].last
  end
end


#tests
require 'prime'

$primesL = []

def build_primesL()
    $primesL = Prime.take_while {|p| p < 5000000 }
end

def count_even_chars(n)
    count = 0
    n.to_s.split('').each do |d|
        count += 1 if ['2', '4', '6', '8', '0'].include?(d)
    end
    return count
end

def f_sol(n)
    build_primesL() if $primesL.length == 0
    resDict = Hash.new []
    $primesL.each do |p|
        break if p > n
        count = count_even_chars(p)
        next if count == 0
        resDict[count] += [p]
    end
    max_even_digs = (resDict.keys).max
    lst = resDict[max_even_digs]
    l = lst.length
    return lst[l - 1] if lst[l - 1] < n
    return lst[l - 2] if lst[l - 1] == n
end

describe "Basic Tests" do
  it "Easy Cases" do
    Test.assert_equals(f(1000), 887)
    Test.assert_equals(f(10000), 8887)
    Test.assert_equals(f(500), 487)
    Test.assert_equals(f(487), 467)
  end
end

describe "Random Tests" do
  it "Low Values of n (From 1000 up to 10000)" do
    for i in 1..19
        n = rand(1000..10000)
        result = f_sol(n)
        res = f(n)
        it "Testing for n = " + n.to_s do
          Test.assert_equals(res, result)
        end
    end
  end
  it "Intermediate Values of n (From 10000 up to 100000)" do
    for i in 1..5
        n = rand(10000..100000)
        result = f_sol(n)
        res = f(n)
        it "Testing for n = " + n.to_s do
          Test.assert_equals(res, result)
        end
    end
  end
  it "Higher Values of n (From 100000 up to 1000000)" do
    for i in 1..2
        n = rand(100000..1000000)
        result = f_sol(n)
        res = f(n)
        it "Testing for n = " + n.to_s do
          Test.assert_equals(res, result)
        end
    end
  end

end
