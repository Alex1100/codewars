def count_positives_sum_negatives(lst)
 temp = []
 positives = lst.reject{|a| a <= 0}
 negatives = lst.reject{|a| a >= 0}
 temp << positives.length
 temp << negatives.reduce(:+)
 if temp[1].nil?
   temp[1] = 0
  end
 temp
end
