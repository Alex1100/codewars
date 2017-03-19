#Refactored
def duplicate_count(text)
  ('a'..'z').count { |c| text.downcase.count(c) > 1 }
end


#Basic
require 'set'
def duplicate_count(text)
    if text.downcase.split('').length < 1 then return 0 end
    text = text.downcase.split('')
    new_obj = {}
    0.upto(text.length - 1) do |i|
      if new_obj[text[i]].nil?
        new_obj[text[i]] = 1
      elsif !new_obj[text[i]].nil?
        new_obj[text[i]] += 1
      end
    end

    if Set.new(new_obj.keys).length == 1
      return 0
    elsif Set.new(new_obj.keys).length != 1
      new_obj.keys.each do |a|
        if new_obj[a] == 1 then new_obj.delete(a) end
      end
      return new_obj.values.length
    end
end


#tests
Test.assert_equals(duplicate_count(""), 0)
Test.assert_equals(duplicate_count("abcde"), 0)
Test.assert_equals(duplicate_count("abcdeaa"), 1)
Test.assert_equals(duplicate_count("abcdeaB"), 2)
Test.assert_equals(duplicate_count("Indivisibilities"), 2)
alphalow=Array('a'..'z').join("")
alphaup=alphalow.upcase
Test.assert_equals(duplicate_count(alphalow), 0)
Test.assert_equals(duplicate_count(alphalow + "aaAb"), 2)

Test.assert_equals(duplicate_count(alphalow+alphalow), 26)
Test.assert_equals(duplicate_count(alphalow+alphaup), 26)
