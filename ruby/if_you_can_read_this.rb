def to_nato(words)
  if words[-1] == "?" || words[-1] == "." || words[-1] == "!"
    finish = words[-1]
    words[-1] = ""
  end

  things = words.split(" ")

  temp = []

  things.each do |word|
    word.each_char do |character|
      if character == "?" || character == "!" || character == "."
        temp << character
      end
      if character == 'A' || character == 'a'
        temp << 'Alfa'
      elsif character == 'B' || character == 'b'
        temp << 'Bravo'
      elsif character == 'C' || character == 'c'
        temp << 'Charlie'
      elsif character == 'D' || character == 'd'
        temp << 'Delta'
      elsif character == 'E' || character == 'e'
        temp << 'Echo'
      elsif character == 'F' || character == 'f'
        temp << 'Foxtrot'
      elsif character == 'G' || character == 'g'
        temp << 'Golf'
      elsif character == 'H' || character == 'h'
        temp << 'Hotel'
      elsif character == 'I' || character == 'i'
        temp << 'India'
      elsif character == 'J' || character == 'j'
        temp << 'Juliett'
      elsif character == 'K' || character == 'k'
        temp << 'Kilo'
      elsif character == 'L' || character == 'l'
        temp << 'Lima'
      elsif character == 'M' || character == 'm'
        temp << 'Mike'
      elsif character == 'N' || character == 'n'
        temp << 'November'
      elsif character == 'O' || character == 'o'
        temp << 'Oscar'
      elsif character == 'P' || character == 'p'
        temp << 'Papa'
      elsif character == 'Q' || character == 'q'
        temp << 'Quebec'
      elsif character == 'R' || character == 'r'
        temp << 'Romeo'
      elsif character == 'S' || character == 's'
        temp << 'Sierra'
      elsif character == 'T' || character == 't'
        temp << 'Tango'
      elsif character == 'U' || character == 'u'
        temp << 'Uniform'
      elsif character == 'V' || character == 'v'
        temp << 'Victor'
      elsif character == 'W' || character == 'w'
        temp << 'Whiskey'
      elsif character == 'X' || character == 'x'
        temp << 'Xray'
      elsif character == 'Y' || character == 'y'
        temp << 'Yankee'
      elsif character == 'Z' || character == 'z'
        temp << 'Zulu'
      end
    end
  end
  temp << finish
  temp.join(' ').rstrip
end
