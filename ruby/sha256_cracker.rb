#Prompt
# Description:

# This kata aims to show the vulnerabilities of hashing functions for short messages.

# When provided with a SHA-256 hash, return the value that was hashed. You are also given the characters that make the expected value, but in alphabetical order.

# The returned value is less than 10 characters long. Return nil for Ruby and Crystal, None for Python, null for Java when the hash cannot be cracked with the given characters.


#Solution
require 'digest'
def sha256Crack(hash, characters)
  characters.chars.permutation
    .find{|a| Digest::SHA256
    .hexdigest(a.join('')) == hash}.join('') rescue nil
end



#Tests
require 'digest'

characters = ('a'..'z').to_a + ('A'..'Z').to_a
rand_characters_array = characters.shuffle.first(7)
rand_characters = rand_characters_array.join
rand_hash = Digest::SHA256.hexdigest(rand_characters)
output = sha256Crack(rand_hash, rand_characters_array.sort.join);

Test.describe('Combination not found') do
  Test.assert_equals(sha256Crack(hash, '123'), nil)
end

Test.describe('Random test') do
  Test.expect( output == rand_characters, "It's not '#{output}', rinse and repeat ;)")
  if output == rand_characters
    puts "You cracked it: '<b>#{rand_characters}</b>'"
    puts "<h3>Thank you for solving this kata! Looking forward to your <span style='color:green'><b>comments, votes and suggestions.</b></span></h3>"
  end
end
