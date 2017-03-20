def has_unique_chars(s):
    return len(s) == len(set(s))



#tests
import random
def correct_has_unique_chars(str):
  if len(str) > 128:
      return False
  result = [0] * 128
  for s in str:
      result[ord(s)]+=1
  return all(r<=1 for r in result)



Test.assert_equals(has_unique_chars("  nAa"),False)
Test.assert_equals(has_unique_chars("abcdef"),True)
Test.assert_equals(has_unique_chars("++-"),False)

all_ascii = [chr(i) for i in xrange(128)]

for _ in range(100):
    l = random.randint(0,127)
    rs = ''.join(all_ascii[random.randint(0,127)] for _ in range(l))
    Test.assert_equals(has_unique_chars(rs),correct_has_unique_chars(rs))

