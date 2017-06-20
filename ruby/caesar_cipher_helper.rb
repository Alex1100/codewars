#Prompt
# Description:

# Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

# For example:

# c = CaesarCipher.new(5); # creates a CipherHelper with a shift of five
# c.encode('Codewars') # returns 'HTIJBFWX'
# c.decode('BFKKQJX') # returns 'WAFFLES'
# If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.


#Modular and Optimal
class CaesarCipher
  def initialize(shift)
    @rotate = ('A'..'Z').to_a.rotate(shift).join
  end

  def encode(string)
    string.upcase.tr "A-Z", @rotate
  end

  def decode(string)
    string.tr @rotate, "A-Z"
  end
end

#Unmodular But Optimal
class CaesarCipher
  attr_accessor :shift

  def initialize(shift)
    @shift = shift
  end

  def encode(string)
    alphabet = {
      'A': [1, 27],
      'B': [2, 28],
      'C': [3, 29],
      'D': [4, 30],
      'E': [5, 31],
      'F': [6, 32],
      'G': [7, 33],
      'H': [8, 34],
      'I': [9, 35],
      'J': [10, 36],
      'K': [11, 37],
      'L': [12, 38],
      'M': [13, 39],
      'N': [14, 40],
      'O': [15, 41],
      'P': [16, 42],
      'Q': [17, 43],
      'R': [18, 44],
      'S': [19, 45],
      'T': [20, 46],
      'U': [21, 47],
      'V': [22, 48],
      'W': [23, 49],
      'X': [24, 50],
      'Y': [25, 51],
      'Z': [26, 52],
      '1': 'A',
      '2': 'B',
      '3': 'C',
      '4': 'D',
      '5': 'E',
      '6': 'F',
      '7': 'G',
      '8': 'H',
      '9': 'I',
      '10': 'J',
      '11': 'K',
      '12': 'L',
      '13': 'M',
      '14': 'N',
      '15': 'O',
      '16': 'P',
      '17': 'Q',
      '18': 'R',
      '19': 'S',
      '20': 'T',
      '21': 'U',
      '22': 'V',
      '23': 'W',
      '24': 'X',
      '25': 'Y',
      '26': 'Z',
      '27': 'A',
      '28': 'B',
      '29': 'C',
      '30': 'D',
      '31': 'E',
      '32': 'F',
      '33': 'G',
      '34': 'H',
      '35': 'I',
      '36': 'J',
      '37': 'K',
      '38': 'L',
      '39': 'M',
      '40': 'N',
      '41': 'O',
      '42': 'P',
      '43': 'Q',
      '44': 'R',
      '45': 'S',
      '46': 'T',
      '47': 'U',
      '48': 'V',
      '49': 'W',
      '50': 'X',
      '51': 'Y',
      '52': 'Z',
    }
    newStr = []
    len = string.size - 1
    string = string.upcase
    0.upto(len) do |i|
      if string[i] == "'" || string[i] == '.' || string[i] == '?' || string[i] == '!' ||string[i] == ' '
        newStr << string[i]
      else
        if alphabet[string[i].to_sym][0] + shift > 26 &&
          newStr << alphabet[((alphabet[string[i].to_sym][1] + shift) -26).to_s.to_sym]
        else
          newStr << alphabet[(alphabet[string[i].to_sym][0] + shift).to_s.to_sym]
        end
      end
    end
    newStr.join('')
  end

  def decode(string)
    alphabet = {
      'A': [1, 27],
      'B': [2, 28],
      'C': [3, 29],
      'D': [4, 30],
      'E': [5, 31],
      'F': [6, 32],
      'G': [7, 33],
      'H': [8, 34],
      'I': [9, 35],
      'J': [10, 36],
      'K': [11, 37],
      'L': [12, 38],
      'M': [13, 39],
      'N': [14, 40],
      'O': [15, 41],
      'P': [16, 42],
      'Q': [17, 43],
      'R': [18, 44],
      'S': [19, 45],
      'T': [20, 46],
      'U': [21, 47],
      'V': [22, 48],
      'W': [23, 49],
      'X': [24, 50],
      'Y': [25, 51],
      'Z': [26, 52],
      '1': 'A',
      '2': 'B',
      '3': 'C',
      '4': 'D',
      '5': 'E',
      '6': 'F',
      '7': 'G',
      '8': 'H',
      '9': 'I',
      '10': 'J',
      '11': 'K',
      '12': 'L',
      '13': 'M',
      '14': 'N',
      '15': 'O',
      '16': 'P',
      '17': 'Q',
      '18': 'R',
      '19': 'S',
      '20': 'T',
      '21': 'U',
      '22': 'V',
      '23': 'W',
      '24': 'X',
      '25': 'Y',
      '26': 'Z',
      '27': 'A',
      '28': 'B',
      '29': 'C',
      '30': 'D',
      '31': 'E',
      '32': 'F',
      '33': 'G',
      '34': 'H',
      '35': 'I',
      '36': 'J',
      '37': 'K',
      '38': 'L',
      '39': 'M',
      '40': 'N',
      '41': 'O',
      '42': 'P',
      '43': 'Q',
      '44': 'R',
      '45': 'S',
      '46': 'T',
      '47': 'U',
      '48': 'V',
      '49': 'W',
      '50': 'X',
      '51': 'Y',
      '52': 'Z',
    }
    newStr = []
    len = string.size - 1
    string = string.upcase
    0.upto(len) do |i|
      if string[i] == "'" || string[i] == '.' || string[i] == '?' || string[i] == '!' || string[i] == ' '
        newStr << string[i]
      else
        if alphabet[string[i].to_sym][0] - shift < 1
          newStr << alphabet[((alphabet[string[i].to_sym][1] + shift) + 26 - (shift * 2)).to_s.to_sym]
        else
          newStr << alphabet[(alphabet[string[i].to_sym][0] - shift).to_s.to_sym]
        end
      end
    end
    newStr.join('')
  end
end




#Tests
Test.describe("Basic tests") do
Test.it("Shift of 5") do

c=CaesarCipher.new(5)

Test.assert_equals(c.encode('Codewars'), 'HTIJBFWX')
Test.assert_equals(c.decode('HTIJBFWX'), 'CODEWARS')
Test.assert_equals(c.encode('WAFFLES'), 'BFKKQJX')
Test.assert_equals(c.decode('BFKKQJX'), 'WAFFLES')
Test.assert_equals(c.encode("IT'S A SHIFT CIPHER!!"), "NY'X F XMNKY HNUMJW!!")
Test.assert_equals(c.decode("NY'X F XMNKY HNUMJW!!"), "IT'S A SHIFT CIPHER!!")
end
Test.it("Shift of 13") do

c =  CaesarCipher.new(13)
Test.assert_equals(c.encode('CNAPNXRF'), 'PANCAKES')
Test.assert_equals(c.decode('PANCAKES'), 'CNAPNXRF')
Test.assert_equals(c.encode('JAVASCRIPT'), 'WNINFPEVCG')
Test.assert_equals(c.decode('WNINFPEVCG'), 'JAVASCRIPT')
end
end

Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
class CaesarCheck
  def initialize(shift) @shift=shift end

  def encode(s) s.upcase.split("").map{|w| w.match(/[A-Z]/) ? (65+(w.ord-65+@shift)%26).chr : w}.join() end

  def decode(s) s.upcase.split("").map{|w| w.match(/[A-Z]/) ? (65+(w.ord-65-@shift)%26).chr : w}.join() end
end
base=["Takashi Mitsuhashi", "Shinji Ito", "Riko Akasaka", "Ryo Tanaka", "Shuichi Takasaki", "Naoya Sagawa", "Keiichi Izawa", "Megumi", "Yuichi Sakakigawa", "Kyoko Hayagawa", "Katsutoshi Imai", "Yasuo Tanigawa", "Taro Koyama", "Makoto Nakano", "Satoshi Katakiri", "Takeshi Sagara", "Suenaga", "Ryoko Morigawa", "Tetsuya Kurosaki"]

40.times do
  n=randint(1,26)
  text=base[randint(0,base.length-1)]
  c,d=CaesarCipher.new(n),CaesarCheck.new(n)
  encoded=c.encode(text)
  Test.it(["Testing encryption and decryption of",text.inspect,"with shift",n.to_s].join(" ")) do
  Test.assert_equals(encoded, d.encode(text))
  Test.assert_equals(c.decode(encoded), text.upcase)
  end
end
end
