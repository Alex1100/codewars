#Refactored
def make_negative( number ):
    return -abs(number)

#Basic
def make_negative( number ):
    if number < 0:
        return number
    elif number > 0:
        return number * -1
    elif number == 0:
        return 0


#tests
Test.assert_equals(make_negative(42),-42)
Test.assert_equals(make_negative(-9),-9)
Test.assert_equals(make_negative(0),0)

from random import randint as rnd

for _ in range(10):
    number = rnd(1, 1000)
    Test.assert_equals(make_negative(number),-abs(number))
    number = rnd(-1000,0)
    Test.assert_equals(make_negative(number),-abs(number))
