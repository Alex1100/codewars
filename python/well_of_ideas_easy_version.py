#Refactored
def well(x):
    c = x.count('good')
    return 'I smell a series!' if c > 2 else 'Publish!' if c else 'Fail!'


#Basic
def well(x):
    true_length = len(list(filter(lambda z: z == 'good', x)))
    if true_length <= 2 and true_length > 0:
        return 'Publish!'
    elif true_length > 2:
        return 'I smell a series!'
    elif true_length == 0:
        return 'Fail!'




#tests
test.describe("Example Cases")

test.assert_equals(well(['bad', 'bad', 'bad']), 'Fail!')
test.assert_equals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
test.assert_equals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')

test.describe("Random Tests")

from random import randint, choice

def well_random_tests(x):
    count_ = x.count('good')
    if count_ == 0: return 'Fail!'
    if count_ <= 2: return 'Publish!'
    elif count_ > 2: return 'I smell a series!'

names=['good', 'bad', 'bad', 'bad', 'bad', 'bad']
for i in range(100):
    x=[]; len_ = randint(0,15)
    for k in range(len_ + 1):
        name = choice(names)
        x.append(name)
    result = well_random_tests(x)
    res = well(x)
    test.it("Testing for " + str(x))
    test.assert_equals(res, result)
