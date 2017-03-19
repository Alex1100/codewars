def say_hello(name, city, state):
  return "Hello, {}! Welcome to {}, {}!".format(" ".join(name), city, state)


#tests
Test.describe("Basic Tests")
Test.assert_equals(say_hello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!','Hello, John Smith! Welcome to Phoenix, Arizona!')
Test.assert_equals(say_hello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!',)
Test.assert_equals(say_hello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
Test.assert_equals(say_hello(['Lupin','the','Third'],'Los Angeles','California'), 'Hello, Lupin the Third! Welcome to Los Angeles, California!')
Test.assert_equals(say_hello(['Marlo','Stanfield'],'Baltimore','Maryland'), 'Hello, Marlo Stanfield! Welcome to Baltimore, Maryland!')

Test.describe("Random Tests")
from random import randint
names=[["Frank", "Underwood"],["Claire", "Underwood"],["Douglas", '"Doug"', "Stamper"],["Zoe", "Barnes"], ["Peter", "Russo"], ["Remy", "Danton"], ["Former", "President", "Garrett", "Walker"]]
cities=["New York City","Los Angeles","Chicago","Houston","Philadelphia", "Detroit"]
states=["New York","California","Illinois","Texas","Pennsylvania", "Michigan"]
sol=lambda name, city, state: "Hello, "+" ".join(name)+"! Welcome to "+city+", "+state+"!"

for _ in range(40):
    name=names[randint(0,len(names)-1)]
    location=randint(0,len(cities)-1)
    city=cities[location]
    state=states[location]
    Test.it("Testing for "+" ".join(name)+" in "+city+", "+state)
    Test.assert_equals(say_hello(name, city, state),sol(name, city, state),"It should work for random inputs too")

