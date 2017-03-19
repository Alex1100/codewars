def AddExtra(listOfNumbers):
    return listOfNumbers + [1]


#tests
test.describe("Basic Tests")
test.assert_equals(len(AddExtra([1,2])), 3)
test.assert_equals(len(AddExtra([])), 1)

test.describe("Random Tests")
from random import randint
for _ in xrange(100):
    myList = [randint(0,100) for _ in range(randint(1,4))]
    test.assert_equals(len(AddExtra(myList)), len(myList)+1)
