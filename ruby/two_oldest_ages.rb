def two_oldest_ages(ages)
  temp = []
  temp << ages.sort.reverse[1]
  temp << ages.sort.reverse[0]
  temp
end