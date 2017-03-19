websites = ["codewars"] * 1000


#tests
test.assert_equals(len(websites), 1000)
test.assert_equals(type(websites), list)
test.assert_equals(list(set(websites)), ["codewars"])
