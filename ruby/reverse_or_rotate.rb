def revrot(str, sz)
  temp = ''
  new_string = ''
  if str.nil? || sz <= 0
    return ""
  else
    str.each_char do |a|
      temp += a
      if temp.length == sz && temp.split('').map{|i| i.to_i**3 }.inject(&:+) % 2 != 0
        #rotate it to the left
        new_string += temp.split('').rotate.join('')
        temp = ''
      elsif temp.length == sz && temp.split('').map{|i| i.to_i**3 }.inject(&:+) % 2 == 0
        #reverse it
        new_string += temp.reverse
        temp = ''
      end
    end
  end
  new_string
end
