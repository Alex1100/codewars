def score( dice )
  six_count = 0
  five_count = 0
  four_count = 0
  three_count = 0
  two_count = 0
  one_count = 0

  0.upto(dice.length - 1) do |i|
    if dice[i] == 6
      six_count += 1
    elsif dice[i] == 5
      five_count += 1
    elsif dice[i] == 4
      four_count += 1
    elsif dice[i] == 3
      three_count += 1
    elsif dice[i] == 2
      two_count += 1
    elsif dice[i] == 1
      one_count += 1
    end
  end

  if six_count > 2 then six_count = 600 else six_count = 0 end
  if five_count > 2
    five_count = 500 + ((five_count % 3) * 50)
  else
    five_count = five_count * 50
  end
  if four_count > 2 then four_count = 400 else four_count = 0 end
  if three_count > 2 then three_count = 300 else three_count = 0 end
  if two_count > 2 then two_count = 200 else two_count = 0 end
  if one_count > 2
    one_count = 1000 + ((one_count % 3) * 100)
  else
    one_count = one_count * 100
  end

  score = six_count + five_count + four_count + three_count + two_count + one_count
end
