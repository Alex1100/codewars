def reverse_list(l):
  return l[::-1]


#tests
test.assert_equals(reverse_list([1,2,3,4]), [4,3,2,1])
test.assert_equals(reverse_list([3,1,5,4]), [4,5,1,3])
test.assert_equals(reverse_list([3,6,9,2]), [2,9,6,3])
test.assert_equals(reverse_list([1]), [1])
