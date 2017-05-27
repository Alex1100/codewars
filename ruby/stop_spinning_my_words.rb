#prompt

# Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

# Examples:

# spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
# spinWords( "This is a test") => returns "This is a test"
# spinWords( "This is another test" )=> returns "This is rehtona test"




#solution
def spinWords(str)
  str.split(' ').map{|word| word.length >= 5 ? word.split('').reverse.join('') : word}.join(' ')
end



#tests
Test.assert_equals(spinWords("Welcome"), "emocleW");
Test.assert_equals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
Test.assert_equals(spinWords("This is a test"), "This is a test");
Test.assert_equals(spinWords("This is another test"), "This is rehtona test");
Test.assert_equals(spinWords("You are almost to the last test"), "You are tsomla to the last test");
Test.assert_equals(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
Test.assert_equals(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
