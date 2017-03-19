#Refactored
def distinct(seq):
    return sorted(set(seq), key = seq.index)

#Basic
def distinct(seq):
  s = []
  for i in seq:
    if i not in s:
      s.append(i)
  return s


#tests
test.describe("Basic Tests")

tests = (
    ([1], [1]),
    ([1,2], [1,2]),
    ([1,1,2], [1,2]),
    ([1,1,1,2,3,4,5], [1,2,3,4,5]),
    ([1,2,2,3,3,4,4,5,6,7,7,7], [1,2,3,4,5,6,7]),
)

for tst in tests:
    inp, exp = tst
    test.assert_equals(distinct(inp), exp)

test.describe("Random Tests")


def _distinct(seq):
    res, unq = [], set()
    for elem in seq:
        if elem not in unq:
            unq.add(elem)
            res.append(elem)
    return res


from random import randint, shuffle


def generate_test_case():
    test_case = []
    for _ in range(randint(1, 50)):
        num, rep = randint(1, 5000000), randint(0, 50)
        test_case.extend([num] * rep)
    shuffle(test_case)
    return test_case


for _ in range(100):
    test_case = generate_test_case()
    test.assert_equals(distinct(test_case), _distinct(test_case))
