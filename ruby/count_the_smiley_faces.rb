#prompt
# Description:
# Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

# Rules for a smiling face:
# -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# -Every smiling face must have a smiling mouth that should be marked with either ) or D.
# Valid smiley face examples:
# :) :D ;-D :~)
# Invalid smiley faces:
# ;( :> :} :]

# Example cases:

# countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
# countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
# countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

# Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)

# Happy coding!

#solution
def count_smileys(arr)
  arr.select { |s| s =~ /[;|:][-~]?[)D]/ }.size
end


#tests
Test.describe("Basic tests") do
Test.assert_equals(count_smileys([]), 0)
Test.assert_equals(count_smileys([":D",":~)",";~D",":)"]), 4)
Test.assert_equals(count_smileys([":)",":(",":D",":O",":;"]), 2)
Test.assert_equals(count_smileys([";]", ":[", ";*", ":$", ";-D"]), 1)
Test.assert_equals(count_smileys([";", ")", ";*", ":$", "8-D"]), 0)
end

Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def sol(arr) arr.reduce(0){|a,b| a+((/[:;][~-]?[)D]/=~b)!=nil ? 1 : 0)} end
eyes=[";",":","8",""]
noses=["-","~"," ",""]
mouths=[")","D","(","P"]

40.times do
  arr=(0..randint(2,30)).map{[eyes[randint(0,eyes.size-1)], noses[randint(0,noses.size-1)], mouths[randint(0,mouths.size-1)]].join}
  Test.it("Testing for #{arr.inspect}") do
  Test.assert_equals(count_smileys(arr.dup),sol(arr),"It should work for random inputs too")
  end
end
end
