staff = {tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }

def boredom(staff)
  moods = staff.values
  avg_mood = 0
  moods.each do |mood|
    if mood == 'finance'
      avg_mood += 2
    elsif mood == 'canteen'
      avg_mood += 10
    elsif mood  == 'regulation'
      avg_mood += 3
    elsif mood == 'trading'
      avg_mood += 6
    elsif mood == 'change'
      avg_mood += 6
    elsif mood == 'IS'
      avg_mood += 8
    elsif mood == 'retail'
      avg_mood += 5
    elsif mood == 'cleaning'
      avg_mood += 4
    elsif mood == 'pissing about'
      avg_mood += 25
    end
  end
  
  if avg_mood <= 80
    return 'kill me now'
  elsif avg_mood > 80 && avg_mood < 100
    return 'i can handle this'
  elsif avg_mood >= 100
    return 'party time!!'
  end
end