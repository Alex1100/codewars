def format_duration(seconds)
  if seconds == 0 then return "now" end
  years, remainder = seconds.divmod(31536000)
  days, remainder = remainder.divmod(86400)
  hours, remainder = remainder.divmod(3600)
  minutes, secs = remainder.divmod(60)
  year_text = text_for_num(years, 'year')
  day_text = text_for_num(days, 'day')
  hour_text = text_for_num(hours, 'hour')
  minute_text = text_for_num(minutes, 'minute')
  second_text = text_for_num(secs, 'second')
  all = [year_text, day_text, hour_text, minute_text, second_text].compact
  last = all.pop
  return last if all.empty?
  all.join(', ') + " and #{last}"
end

def text_for_num(num, base_text)
  return if num.zero?
  "#{num} #{base_text}#{'s' if num > 1}"
end
