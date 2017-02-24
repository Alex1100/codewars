def fold_array(array, runs)
  newArray = array[0..array.length]
  runs.times do
    for i in 0...newArray.length/2
      newArray[i] = newArray[i] + newArray.pop
    end
  end
  newArray
end
