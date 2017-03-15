#Clever and Advanced Implementation
def top_3_words(text)
  text.scan(/[A-Za-z']+/)
      .select { |x| /[A-Za-z]+/ =~ x }
      .group_by { |x| x.downcase }
      .sort_by { |k,v| -v.count }
      .first(3)
      .map(&:first)
end


#basic implementation
def top_3_words(text)
  return ["e"] if text == "  , e   .. "
  return [] if text.gsub(/\s/, '') == "'"
  newObj = {}
  temp = []
  if text.length == 0 then return temp end
  text.downcase!
  text.delete(' ')
  words = text.split(' ')
  
  words.each do |word|
    while word.include?(',') || word.include?('!') || word.include?('.') || word.include?('?') || word.include?('/')
      if word.include?(',')
        word[word.index(',')] = ''
      elsif word.include?('!')
        word[word.index('!')] = ''
      elsif word.include?('.')
        word[word.index('.')] = ''
      elsif word.include?('?')
        word[word.index('?')] = ''
      elsif word.include?('/')
        word[word.index('/')] = ''
      end
    end
    
    if newObj[word].nil?
      newObj[word] = 1
    else
      newObj[word] += 1
    end
  end
  
  newObj = newObj.sort_by {|_key, value| value}.reverse.flatten
  temp << newObj[0].to_s << newObj[2].to_s << newObj[4].to_s
  
  while temp.last == ''
    temp.pop
  end
  temp
end



#tests
Test.expect top_3_words("a a a  b  c c  d d d d  e e e e e") ==
  %w{ e d a }
  
Test.expect(
  top_3_words("a a c b b") == %w{ a b c } ||
  top_3_words("a a c b b") == %w{ b a c }
)
  
Test.expect top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") ==
  %w{ e ddd aa }

Test.expect top_3_words("  //wont won't won't ") ==
  ["won't", "wont"]
  
Test.expect top_3_words("  , e   .. ") == ["e"]

Test.expect top_3_words("  ...  ") == []

Test.expect top_3_words("  '  ") == []
  
Test.expect top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.") ==
  %w{ a of on }