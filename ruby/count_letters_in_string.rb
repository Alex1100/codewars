#prompt
#In this kata, you've to count letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
#Example:
#letter_count('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}



def letter_count(str)
  new_hash = {}
  str.split('').sort.each{|character| if new_hash[character.to_sym] == nil then new_hash[character.to_sym] = 1 else new_hash[character.to_sym] += 1 end}
  new_hash
end


#tests
Test.describe("Basic Test") do
  Test.assert_equals(letter_count('codewars'), {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1})
  Test.assert_equals(letter_count('activity'), {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1})
  Test.assert_equals(letter_count('arithmetics'), {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2})
  Test.assert_equals(letter_count('traveller'), {:a=>1, :e=>2, :l=>2, :r=>2, :t=>1, :v=>1})
  Test.assert_equals(letter_count('daydreamer'), {:a=>2, :d=>2, :e=>2, :m=>1, :r=>2, :y=>1})
end

Test.describe("Random Tests") do
  def randint(a,b) rand(b-a+1)+a end
  def sol(s)
    h = s.chars.each_with_object(Hash.new(0)){|l,c| c[l] += 1}
    Hash[h.map{|k,v| [k.to_sym,v] }].sort.to_h
  end
  l="tavoyan"
  40.times do
    s=[]
    randint(3,15).times do
      s+=[l[randint(0,l.length-1)]]
    end
    s=s.join
    Test.it("Testing for #{s}") do
      Test.assert_equals(letter_count(s.dup),sol(s), "It should work for random inputs too")
    end
  end
end
