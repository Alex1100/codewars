#First Approach
def remove_every_other(my_list):
    return my_list[::2]


#Second Approach
def remove_every_other(my_list):
    r = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            r.append(my_list[i])
    return r


#tests
from itertools import chain, cycle, islice
from random import choice, randint, shuffle


def random_element(seq):
    element = choice(seq)
    return choice((element, [element], {element: choice(seq)}))


def solution(seq):
    return seq[::2]


test.describe('Tests with just one element')
single_element = [[1], [True], [[1, 2, 3, 4, 5]], [{'Hello': 'Goodbye'}],
                  ['Just one element in here']]
for a in single_element:
    test.assert_equals(solution(a), remove_every_other(a))


test.describe('Tests with two elements')
two_elements = [['Hello', 'Goodbye'], [1.013, 2398.00], [[1, 2, 3], [4, 5, 6]],
                [False, True], [{'Hello': 'Goodbye'}, {1: 2}]]
for b in two_elements:
    test.assert_equals(solution(b), remove_every_other(b))


test.describe('Tests with multiple elements')
multiple_elements = [
    ['Yes', 'No', 'Yes', 'No', 'Yes', 'No'],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6, 7], [8, 9, 10, 11, 12]],
    ['Hello', 12345, ['Goodbye'], {'Great': 'Job'}],
    [True, True, False, False, False, True, True]
]
for c in multiple_elements:
    test.assert_equals(solution(c), remove_every_other(c))


test.describe('Random Tests')
n = randint(20, 50)
# booleans, floats, integers, strings
all_of_them = list(chain(
    islice(cycle((True, False)), n),
    (a * 1.75 for a in range(1, n + 1)),
    range(n),
    islice(cycle(('Hello', 'Goodbye', 'Yes', 'No')), n)
))
shuffle(all_of_them)

for _ in range(100):
    test_seq = [random_element(all_of_them) for __ in range(randint(1, 30))]
    test.it(repr(test_seq))
    test.assert_equals(solution(test_seq), remove_every_other(test_seq))
