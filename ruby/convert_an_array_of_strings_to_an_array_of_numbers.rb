def to_number_array(string_array)
  temp = []
  string_array.each do |a|
    if a.include?('.') then temp << a.to_f else temp << a.to_i end
  end
  temp
end
