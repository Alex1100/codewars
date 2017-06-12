#prompt
# Sum of Pairs

# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

# sum_pairs([11, 3, 7, 5],         10)
# #              ^--^      3 + 7 = 10
# == [3, 7]

# sum_pairs([4, 3, 2, 3, 4],         6)
# #          ^-----^         4 + 2 = 6, indices: 0, 2 *
# #             ^-----^      3 + 3 = 6, indices: 1, 3
# #                ^-----^   2 + 4 = 6, indices: 2, 4
# #  * entire pair is earlier, and therefore is the correct answer
# == [4, 2]

# sum_pairs([0, 0, -2, 3], 2)
# #  there are no pairs of values that can be added to produce 2.
# == None/nil/undefined (Based on the language)

# sum_pairs([10, 5, 2, 3, 7, 5],         10)
# #              ^-----------^   5 + 5 = 10, indices: 1, 5
# #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# #  * entire pair is earlier, and therefore is the correct answer
# == [3, 7]
# Negative numbers and duplicate numbers can and will appear.

# NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

#refactored
def sum_pairs(ints, s)
  seen = {}
  for i in ints do
    return [s-i, i] if seen[s-i]
    seen[i] = true
  end
  nil
end


#solution
def sum_pairs(ints, s)
  v = ints.slice(1, ints.length)

  d = v.select{|b| ints[0] + b == s}[0] if v.select{|b| ints[0] + b}.length > 1

  if d != nil && ints[0] + d == s then return [ints[0], d] end

  ints.each_with_index do |z, i|
    z = ints.rotate(i)
    if z[0] + z[1] == s then return [z[0], z[1]] end
    if i == ints.length - 1 then return nil end
  end
end



#tests
l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]
l9= [1] * 2000000
l9[l9.length / 2-1] = 6
l9[l9.length / 2] = 7
l9[l9.length-2] = 8
l9[l9.length-1] = -3
l9[0] = 13
l9[1] = 3

Test.describe("Testing For Sum of Pairs")do
Test.expect(sum_pairs(l1, 8) == [1, 7], "Basic: ["+l1.join(", ")+"] should return [1, 7] for sum = 8")
Test.expect(sum_pairs(l2, -6) == [0, -6], "Negatives: ["+l2.join(", ")+"] should return [0, -6] for sum = -6")
Test.expect(sum_pairs(l3, -7) == nil, "No Match: ["+l3.join(", ")+"] should return nil for sum = -7")
Test.expect(sum_pairs(l4, 2) == [1, 1], "First Match From Left: ["+l4.join(", ")+"] should return [1, 1] for sum = 2 ")
Test.expect(sum_pairs(l5, 10) == [3, 7], "First Match From Left REDUX!: ["+l5.join(", ")+"] should return [3, 7] for sum = 10 ")
Test.expect(sum_pairs(l6, 8) == [4, 4], "Duplicates: ["+l6.join(", ")+"] should return [4, 4] for sum = 8")
Test.expect(sum_pairs(l7, 0) == [0, 0], "Zeroes: ["+l7.join(", ")+"] should return [0, 0] for sum = 0")
Test.expect(sum_pairs(l8, 10) == [13, -3], "Subtraction: ["+l8.join(", ")+"] should return [13, -3] for sum = 10")
end

Test.describe("Excruciatingly Long List Tests")do
Test.expect(sum_pairs(l9, 13) == [6, 7], "Two Million Numbers With Middle Pair: Should terminate with a valid pair output")
Test.expect(sum_pairs(l9, 5) == [8, -3], "Two Million Numbers With Pair At End: Should terminate with a valid pair output")
Test.expect(sum_pairs(l9, 16) == [13, 3], "Two Million Numbers With Pair At Start: Should terminate with a valid pair output")
Test.expect(sum_pairs(l9, 31) == nil, "Two Million Numbers With No Match: Should return nil in a decent time period")
end



