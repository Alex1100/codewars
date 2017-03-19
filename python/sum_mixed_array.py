#Refactored
def sum_mix(arr):
    return sum(map(int, arr))


#Basic
def sum_mix(arr):
    num_list = list(map(lambda x: int(x), arr))
    from functools import reduce
    return reduce((lambda x, y: x + y), num_list)



#tests
Test.describe("Basic tests")
Test.assert_equals(sum_mix([9, 3, '7', '3']), 22)
Test.assert_equals(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
Test.assert_equals(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)
Test.assert_equals(sum_mix(['1', '5', '8', 8, 9, 9, 2, '3']), 45)
Test.assert_equals(sum_mix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)

Test.describe("Random tests")
from random import randint
sol=lambda arr: (sum(int(a) for a in arr))

for _ in range(40):
    arr=[randint(-100,100) if randint(0,1) else str(randint(-100,100)) for q in range(randint(1,100))]
    Test.it("Testing for "+repr(arr))
    Test.assert_equals(sum_mix(arr),sol(arr),"It should work for random inputs too")
