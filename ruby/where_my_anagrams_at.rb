#Prompt
# Description:

# What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

# 'abba' & 'baab' == true

# 'abba' & 'bbaa' == true

# 'abba' & 'abbba' == false
# Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

# anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

# anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

# anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


#Solution
def anagrams(word, words)
  wordsHash = Hash[words.collect { |v| [v, v] }]
  result = []
  perms = word.chars.to_a.permutation.map(&:join).uniq
  perms.each do |wor|
    if wordsHash[wor] == wor
      result << wor
    end
  end
  result
end


#Tests
def testAnagrams(word, result, wrong)
  results = anagrams(word, result + wrong)
  results.sort() == result.sort()
end

word0 = "a"
result0 = ["a"]
wrong0 = ["b", "c", "d"]
Test.expect testAnagrams(word0, result0, wrong0)

word1 = "ab"
result1 = ["ab", "ba"]
wrong1 = ["aa", "bb", "cc", "ac", "bc", "cd"]
Test.expect testAnagrams(word1, result1, wrong1)

word2 = "abba"
result2 = ["aabb", "bbaa", "abab", "baba", "baab"]
wrong2 = ["abcd", "abbba", "baaab", "abbab", "abbaa", "babaa"]
Test.expect testAnagrams(word2, result2, wrong2)

word3 = "racer"
result3 = ["carer", "arcre", "carre"]
wrong3 = ["racers", "arceer", "raccer", "carrer", "cerarr"]
Test.expect testAnagrams(word2, result2, wrong2)

word4 = "big"
result4 = []
wrong4 = ["gig", "dib", "bid", "biig"]
Test.expect testAnagrams(word4, result4, wrong4)
