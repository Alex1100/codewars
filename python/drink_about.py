def people_with_age_drink(age):
    if age <= 13:
        return 'drink toddy'
    elif age > 13 and age < 18:
        return 'drink coke'
    elif age > 17 and age < 21:
        return 'drink beer'
    elif age > 20:
        return 'drink whisky'


#tests
Test.describe('people_with_age_drink')

Test.it("should return 'drink toddy' when age is less than 14")
Test.assert_equals(people_with_age_drink(13), 'drink toddy', "Wrong result for 13")
Test.assert_equals(people_with_age_drink(0), 'drink toddy', "Wrong result for 0")

Test.it("should return 'drink coke' when age is between 14(inclusive) and 18(exclusive)")
Test.assert_equals(people_with_age_drink(17), 'drink coke')
Test.assert_equals(people_with_age_drink(15), 'drink coke')
Test.assert_equals(people_with_age_drink(14), 'drink coke')

Test.it("should return 'drink beer' when age is between 18(inclusive) and 21(exclusive)")
Test.assert_equals(people_with_age_drink(20), 'drink beer')
Test.assert_equals(people_with_age_drink(18), 'drink beer')

Test.it("should return 'drink whisky' when age is greater than or equal to 21")
Test.assert_equals(people_with_age_drink(22), 'drink whisky')
Test.assert_equals(people_with_age_drink(21), 'drink whisky')

Test.it("should work with random input")
from random import randint

def solution(age):
    if age < 14: return "drink toddy"
    if age < 18: return "drink coke"
    if age < 21: return "drink beer"
    return "drink whisky"

for _ in range(40):
    age = randint(1, 30)
    Test.assert_equals(people_with_age_drink(age), solution(age), "Wrong result for {}".format(age))
