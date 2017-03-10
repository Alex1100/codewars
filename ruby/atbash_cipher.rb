abc = "abcdefghijklmnopqrstuvwxyz"

class AtbashCipher
  attr_accessor :abc, :str
  
  def initialize(abc)
    @abc = abc
    @str = str
  end
  
  def encode(str)
    str.downcase
    count = @abc.length - 1
    alphabet = {}
    @abc.split('').each do |letter|
      alphabet[letter] = count
      count = count - 1
    end
    z = str.split('')
    result = ''
    z.each do |b|
      result += "#{@abc.split('')[alphabet[b]]}"
    end
    result
  end
  
  
  def decode(str)
    str.downcase
    count = 0
    alphabet = {}
    @abc.split('').each do |letter|
      alphabet[letter] = count
      count = count + 1
    end
    z = str.split('')
    result = ''
    z.each do |b|
      result += "#{@abc.split('').reverse[alphabet[b]]}"
    end
    result
  end
end


c = AtbashCipher.new(abc)
c.encode('xlwvdzih')
c.decode('abc')