meet = {"tim":0, "jim":2, "randy":0, "sandy":7, "andy":0, "katie":5, "laura":1, "saajid":2, "alex":3, "john":2, "mr":0}
boss = "laura"

def outed(meet, boss)
  vibe = 0
  0.upto(meet.keys.length - 1) do |i|
    if meet[meet.keys[i]] == boss
      vibe += meet.values[i] * 2
    else
      vibe += meet.values[i]
    end
  end
  
  vibe = vibe/meet.keys.length
  
  if vibe <= 5
    return 'Get Out Now!'
  else
    return 'Nice Work Champ!'
  end
end