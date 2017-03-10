class SequenceSum
  def self.show_sequence(n)
     temp = []
     if n > 0
       number = n
       number.downto(0) do |i|
         temp << i
       end
     elsif n == 0
       return "0=0"
     elsif n < 0
       return "#{n}<0"
     end
     sum = temp.reduce(:+)
     final_string = ''
     0.upto(temp.length).each do |z|
       if z < temp.length - 1
         final_string += "#{temp.reverse[z]}+"
       elsif z == temp.length - 1
         final_string += "#{temp.reverse[z]}"
       elsif z == temp.length
         final_string += "#{temp.reverse[z]} = #{sum}"
       end
     end
     final_string
  end
end

SequenceSum.show_sequence(6)
SequenceSum.show_sequence(7)
SequenceSum.show_sequence(0)
SequenceSum.show_sequence(-1)