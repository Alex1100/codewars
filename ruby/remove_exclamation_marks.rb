def remove_exclamation_marks(s)
  s.split('').reject{|z| z == '!'}.join('')
end

#even shorter
def remove_exclamation_marks(s)
  s.delete('!')
end

#tests
Test.describe("Basic tests") do
Test.assert_equals(remove_exclamation_marks("Hello World!"), "Hello World")
Test.assert_equals(remove_exclamation_marks("Hello World!!!"), "Hello World")
Test.assert_equals(remove_exclamation_marks("Hi! Hello!"), "Hi Hello")
Test.assert_equals(remove_exclamation_marks(""), "")
Test.assert_equals(remove_exclamation_marks("Oh, no!!!"), "Oh, no")
end

Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def sol(s) s.gsub("!","") end
base="ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz     !!!!!!!!!!!!!"

40.times do
  s=(0..randint(1,45)).map{base[randint(0,base.length-1)]}.join
  Test.it("Testing for #{s}") do
  Test.assert_equals(remove_exclamation_marks(s),sol(s),"It should work for random inputs too")
  end
end
end