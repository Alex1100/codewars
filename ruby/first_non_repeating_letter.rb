#Prompt
# Description:

# Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

# For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

# As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

# If a string contains all repeating characters, it should return the empty string ("").



#Solution
def  first_non_repeating_letter(s)
  letters = s.downcase.split('')

  letters&.each_with_index do |l,i|
    return s[i] if letters.count(l) == 1
  end
  ''
end


#Tests
# encoding: UTF-8

Test.describe('Simple Tests') do
  it('should handle simple tests') do
    Test.assert_equals(first_non_repeating_letter('a'), 'a')
    Test.assert_equals(first_non_repeating_letter('stress'), 't')
    Test.assert_equals(first_non_repeating_letter('moonmen'), 'e')
  end
  it('should handle empty strings') do
    Test.assert_equals(first_non_repeating_letter(''), '')
  end
end

Test.describe('Harder Tests') do
  it('should handle all repeating strings') do
    Test.assert_equals(first_non_repeating_letter('abba'), '')
    Test.assert_equals(first_non_repeating_letter('aa'), '')
  end
  it('should handle odd characters') do
    Test.assert_equals(first_non_repeating_letter('hello world, eh?'), 'w')
    Test.assert_equals(first_non_repeating_letter('~A string with some special char~'), 'n')
  end
  it('should handle letter cases') do
    Test.assert_equals(first_non_repeating_letter('sTreSS'), 'T')
    Test.assert_equals(first_non_repeating_letter('Go hang a salami, I\'m a lasagna hog!'), ',')
  end
end


Test.describe('Random Tests') do
  def  first_non_repeating_letter_sol(s)
  l = ""
  s.split('').each do |c|
    next if (l != "")
    if ((s.scan(/#{c}/i)||[]).length == 1)
      l = c
    end
  end
  return l
end

  def random_string
   size = rand(80)
   s = ""
   a = ('a'..'z').to_a + ('A'..'Z').to_a
   size.times do
     s += a.sample
   end
   s
  end

  40.times do |t|
    s = random_string
    it ("Should work for #{s}") do
      Test.assert_equals(first_non_repeating_letter(s), first_non_repeating_letter_sol(s))
    end
  end
end
