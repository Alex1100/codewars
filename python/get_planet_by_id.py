def get_planet_name(id):
    options={
        1:"Mercury",
        2:"Venus",
        3:"Earth",
        4:"Mars",
        5:"Jupiter",
        6:"Saturn",
        7:"Uranus" ,
        8:"Neptune"}
    return options[id]


#tests
Test.describe("Basic tests")
Test.assert_equals(get_planet_name(2), 'Venus')
Test.assert_equals(get_planet_name(5), 'Jupiter')
Test.assert_equals(get_planet_name(3), 'Earth')
Test.assert_equals(get_planet_name(4), 'Mars')
Test.assert_equals(get_planet_name(8), 'Neptune')
Test.assert_equals(get_planet_name(1), 'Mercury')

Test.describe("Random tests")
from random import randint
sol=lambda id: ["Kypton","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"][id]
for _ in range(40):
    n=randint(1,8)
    Test.it("Asking for planet number "+str(n))
    Test.assert_equals(get_planet_name(n), sol(n), 'It should work for random inputs too')
