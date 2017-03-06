def get_middle(s)
  word_length = s.length/2
  if s.length.even? then return "#{s[word_length - 1]}" + "#{s[word_length]}" elsif !s.length.even? then return s[word_length] end
end
