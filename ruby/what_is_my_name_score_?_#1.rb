$alpha = {'ABCDE':1,'FGHIJ':2,'KLMNO':3,'PQRST':4,'UVWXY':5}  #'Z' is ignored

def name_score(name)
  keys = $alpha.keys
  values = $alpha.values
  count = 0
  total_count = 0
  incrementer = 1
  name.downcase.each_char do |letter|
    0.upto(keys.length - 1) do |i|
      if keys[i].downcase.include? letter
        count += values[i]
      end
    end
  end
  b = {}
  b[name] = count
  b = b.inspect
  b = eval(b)
end