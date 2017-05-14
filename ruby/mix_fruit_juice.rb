def mix_fruit(arr)
  sum = 0

  arr.each do |fruit|
    if ['strawberry', 'avocado', 'mango'].include? fruit.downcase
      sum += 7
    elsif ['banana', 'orange', 'apple', 'lemon', 'grapes'].include? fruit.downcase
      sum += 5
    elsif !['strawberry', 'avocado', 'mango', 'banana', 'orange', 'apple', 'lemon', 'grapes'].include? fruit
      sum += 9
    end
  end

  sum = (sum.ceil / arr.length.to_f).round
end


#tests
describe "Basic tests" do
Test.assert_equals(mix_fruit(["banana","mango","avocado"]), 6)
Test.assert_equals(mix_fruit(["melon","Mango","kiwi"]), 8)
Test.assert_equals(mix_fruit(["watermelon","cherry","avocado"]), 8)
Test.assert_equals(mix_fruit(["watermelon","lime","tomato"]), 9)
Test.assert_equals(mix_fruit(["blackBerry","coconut","avocado"]), 8)
Test.assert_equals(mix_fruit(["waterMelon","mango"]), 8)
Test.assert_equals(mix_fruit(["watermelon","pEach"]), 9)
Test.assert_equals(mix_fruit(["watermelon","Orange","grapes"]), 6)
Test.assert_equals(mix_fruit(["watermelon"]), 9)
Test.assert_equals(mix_fruit(["BlACKbeRrY","cOcONuT","avoCaDo"]), 8)
end

describe "Random tests" do
def randint(a,b) rand(b-a+1)+a end
def sol(arr) (arr.reduce(0){|a,b| b=b.downcase; a+(["banana","orange","apple","lemon","grapes"].index(b) ? 5 : ["avocado","strawberry","mango"].index(b) ? 7 : 9)} / arr.size.to_f).round end
base=["Banana", "Orange", "Apple", "Lemon", "Grapes", "Avocado", "Strawberry", "Mango", "gumgum fruit", "strawberry", "peach", "pear", "papaya", "kiwi", "berry"]

40.times do
  arr=base.shuffle.slice(0,randint(1,base.size-1)).map{|f| f.split("").map{|l| randint(0,1)==0 ? l.upcase : l.downcase}.join}
  it "Testing for #{arr}" do
  Test.assert_equals(mix_fruit(arr),sol(arr),"It should work for random inputs too")
  end
end
end
