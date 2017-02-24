def shoot(results)
  scores = results.map{|a| a[0].map{|b| b[1]}}.flatten
  multiplier = results.map{|a| a.map{|b| b}}.flatten
  count = 0
  temp = []
  shooter1 = []
  shooter2 = []
  shooter1_final_result = []
  shooter2_final_result = []

  0.upto(multiplier.length - 1) do |i|
    if i.odd?
      temp << multiplier[i]
    end
  end

  0.upto(scores.length - 1) do |g|
    if g % 2 != 0
      shooter2 << scores[g]
    else
      shooter1 << scores[g]
    end
  end

  0.upto(temp.length - 1).each do |t|
    if temp[t] == true
      if shooter1[t] == "XX"
        shooter1_final_result << 2 * 2
      elsif shooter1[t] == "XO" || shooter1[t] == "OX"
        shooter1_final_result << 1 * 2
      else
        shooter1_final_result << 0
      end

      if shooter2[t] == "XX"
        shooter2_final_result << 2 * 2
      elsif shooter2[t] == "XO" || shooter2[t] == "OX"
        shooter2_final_result << 1 * 2
      else
        shooter2_final_result << 0
      end
    elsif temp[t] != true
      if shooter1[t] == "XX"
        shooter1_final_result << 2 * 1
      elsif shooter1[t] == "XO" || shooter1[t] == "OX"
        shooter1_final_result << 1 * 1
      else
        shooter1_final_result << 0
      end

      if shooter2[t] == "XX"
        shooter2_final_result << 2
      elsif shooter2[t] == "XO" || shooter2[t] == "OX"
        shooter2_final_result << 1
      else
        shooter2_final_result << 0
      end
    end
  end

  if shooter1_final_result.reduce(:+) == shooter2_final_result.reduce(:+)
      return "Draw!"
  elsif shooter1_final_result.reduce(:+) > shooter2_final_result.reduce(:+)
      return "Pete Wins!"
  else
    return "Phil Wins!"
  end
end
