#Prompt
# Description:

# A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
# Within that sequence, he chooses two numbers, a and b.
# He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
# Given a number n, could you tell me the numbers he excluded from the sequence?
# The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow) and returns an array of the form:

# [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
# with all (a, b) which are the possible removed numbers in the sequence 1 to n.

# [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

# It happens that there are several possible (a, b). The function returns an empty array if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

# (See examples for each language in "RUN EXAMPLES")

# #Examples:

# removNb(26) should return [(15, 21), (21, 15)]
# or

# removNb(26) should return { {15, 21}, {21, 15} }
# or

# removeNb(26) should return [[15, 21], [21, 15]]
# or

# removNb(26) should return [ {15, 21}, {21, 15} ]
# or

# in C:
# removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
# tested by way of strings.



#Solution
def removNb(n)
  results = []
  1.upto(n + 1) do |a|
    b = (n * (n + 1) / 2 - a) / (a + 1).to_f
    if b % 1 == 0 && b <= n then results << [a, b] end
  end
  results
end



#Tests
Test.assert_equals(removNb(26), [[15, 21], [21, 15]])
Test.assert_equals(removNb(100), [])
Test.assert_equals(removNb(101), [[55, 91], [91, 55]])
Test.assert_equals(removNb(102), [[70, 73], [73, 70]])
Test.assert_equals(removNb(110), [[70, 85], [85, 70]])
Test.assert_equals(removNb(1006), [[546, 925], [925, 546]])
Test.assert_equals(removNb(103), [])
Test.assert_equals(removNb(446), [[252, 393], [393, 252]])
Test.assert_equals(removNb(846), [[498, 717], [717, 498]])
Test.assert_equals(removNb(1000003), [[550320, 908566], [559756, 893250], [893250, 559756], [908566, 550320]])
Test.assert_equals(removNb(1000008), [[677076, 738480], [738480, 677076]])

def removNbTest(n)
    s = (n * (n +1) / 2)
    res = []
    i = (n / 2).to_i
    while (i <= n) do
        b = s - i
        if (b % (i + 1) == 0) then
            res << [i, b / (i + 1)]
        end
        i = i + 1
    end
    res
end

def randomTests()
    someVals = [210, 211, 213, 220, 226, 231, 232, 249, 250, 257, 262,
                263, 265, 266, 282, 290, 297, 300, 304, 311, 312, 314,
                325, 340, 341, 346, 358, 362, 369, 378, 381, 386, 394
               ]
    x = 0
    10.times do
        rn = Random.rand(29)
        f1 = someVals[rn]
        puts("Random Tests ", x)
        Test.assert_equals(removNb(f1), removNbTest(f1))
        x += 1
    end
end

randomTests()
