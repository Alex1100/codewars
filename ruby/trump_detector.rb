def trump_detector(trump_speech)
  extras = vowels = 0
  trump_speech.scan(/(A+|E+|I+|O+|U+)/i) { |x| vowels += 1; extras += x[0].length - 1 }
  (extras.to_f / vowels).round(2)
end

#tests
Test.describe("Basic tests") do
Test.assert_equals(trump_detector("I will build a huge wall"), 0)
Test.assert_equals(trump_detector("HUUUUUGEEEE WAAAAAALL"), 4)
Test.assert_equals(trump_detector("MEXICAAAAAAAANS GOOOO HOOOMEEEE"), 2.5)
Test.assert_equals(trump_detector("America NUUUUUKEEEE Oooobaaaamaaaaa"), 1.89)
Test.assert_equals(trump_detector("listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT"), 1.56)
end

Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def sol(t) lambda{|m| (m.inject(0){|a,b| a+b.length-1}/m.length.to_f).round(2)}.(t.scan(/a+/i)+t.scan(/e+/i)+t.scan(/i+/i)+t.scan(/o+/i)+t.scan(/u+/i)) end
base=["naughty countries","kill","bad foreigners","I have long fingers","pretty wife","excellent sons","go home","migrants","great","America","listen","Obama","power","tradition","family","religion","huge","wall","nuke","I kid you not","I am telling the truth","bombs","mexicans","border","hillary","I am rich","I am very rich","I am filthy rich","migrants","build","I know it","success","trump","trump university","good Americans"]
extra=["","","","","",",",",",":",".","!","?","!!!","!?!","...","!!!!!!1!!","!!!?!?!?!?!"]

40.times do
  t=(0..randint(1,35)).map{(randint(0,1)==0 ? base[randint(0,base.length-1)] : base[randint(0,base.length-1)].upcase).gsub(/[aeiou]/){|a| a*randint(1,5)}+extra[randint(0,extra.length-1)]}.join(" ")+extra[extra.length+randint(-5,-1)]
  t=t.gsub(/[!?.] \w/){|a| a.upcase}
  Test.it("Testing for #{t}") do
  Test.assert_equals(trump_detector(t),sol(t),"It should work for random inputs too")
  end
end
end