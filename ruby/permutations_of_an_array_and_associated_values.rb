#prompt
# The special score(ssc) of an array of integers will be the sum of each integer multiplied by its corresponding index plus one in the array.

# E.g.: with the array [6, 12, -1]

# arr =   [6,      12,       -1 ]
# ssc =   1*6  +  2* 12 +  3.(*1) = 6 + 24 - 3 = 27
# The array given in the example has six(6) permutations and are with the corresponding ssc:

# Permutations      Special Score (ssc)
# [6, 12, -1]      1*6 + 2*12 + 3*(-1) = 27
# [6, -1, 12]       1*6 + 2*(-1) + 3*12 = 40
# [-1, 6, 12]       1*(-1) + 2*6 + 3*12 = 47
# [-1, 12, 6]       1*(-1) + 2*12 + 3*6 = 41
# [12, -1, 6]       1*12 + 2*(-1) + 3*6 = 28
# [12, 6, -1]       1*12 + 2*6 + 3*(-1) = 21
# The total sum of the ssc's of all the possible permutations is: 27 + 40 + 47 + 41 + 28 + 21 = 204

# The maximum value for the ssc is 47.

# The minimum value for the ssc is 21.

# We need a special function ssc_forperm() that receives an array of uncertain number of elements (the elements may occur more than once) and may output a list of dictionaries with the following data:

# [{"total perm":__}, {"total ssc": ___}, {"max ssc": __}, {"min ssc": __}]
# For the example we have above will be:

# ssc_forperm([6, 12, -1]) = [{"total perm":6}, {"total ssc:204}, {"max ssc":47}, {"min ssc":21}]
# You may assume that you will never receive an empty array.

# Also you will never receive an array with the same element in all the positions like [1, 1, 1, 1 ,1], but you may have elements occuring twice or more like [1, 1, 1, 2, 3]

# Enjoy it!!

#solution
def ssc_forperm(arr)
  all_permutations = arr.permutation.to_a.uniq
  total_perm = all_permutations.length
  total_ssc = 0
  max_ssc = 0
  min_ssc = 0
  temp = []
  inner_temp = []

  all_permutations.each_with_index do |perm, i|
  inner_temp = []
    perm.each_with_index do |element, j|
      j = j + 1
      inner_temp << (element * j)
    end
    temp << inner_temp.reduce(:+)
  end
  sorted_temp = temp.sort

  max_ssc = sorted_temp[-1]
  min_ssc = sorted_temp[0]
  total_ssc = sorted_temp.reduce(:+)

  [{"total perm"=> total_perm}, {"total ssc"=> total_ssc}, {"max ssc"=> max_ssc}, {"min ssc"=> min_ssc}]
end


#tests
Test.describe("Example Tests") do
Test.assert_equals(ssc_forperm([1, -1]), [{"total perm"=>2},
{"total ssc"=>0}, {"max ssc"=>1}, {"min ssc"=>-1}])
Test.assert_equals(ssc_forperm([6, 12, -1]), [{"total perm"=>6},
{"total ssc"=>204}, {"max ssc"=>47}, {"min ssc"=>21}])
Test.assert_equals(ssc_forperm([8, 23, -4, 10]), [{'total perm'=>24},
{'total ssc'=>2220}, {'max ssc'=>134}, {'min ssc'=>51}])
Test.assert_equals(ssc_forperm([4, 25, 5, 11, 4]), [{'total perm'=>60},
{'total ssc'=>8820}, {'max ssc'=>196}, {'min ssc'=>98}])
Test.assert_equals(ssc_forperm([1, 1, 1, 11, 2]), [{'total perm'=>20},
{'total ssc'=>960}, {'max ssc'=>69}, {'min ssc'=>27}])
end
