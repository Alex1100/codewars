#Prompt
# You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

# Try to solve this in-place - in a real interview, you will only be allowed to use O(1) additional memory.

# Example

# For

# a = [[1, 2, 3],
#      [4, 5, 6],
#      [7, 8, 9]]
# the output should be

# rotateImage(a) =
#     [[7, 4, 1],
#      [8, 5, 2],
#      [9, 6, 3]]
# Input/Output

# [time limit] 4000ms (rb)
# [input] array.array.integer a

# Guaranteed constraints:
# 1 ≤ a.length ≤ 100,
# a[i].length = a.length,
# 1 ≤ a[i][j] ≤ 104.

# [output] array.array.integer

#Solution
def rotateImage(a)
  a[0].each_with_index.map{|col, elem| a.map{|row| row[elem]}.reverse()}
end
