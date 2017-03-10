def num_obj(s)
  temp = []
  s.each do |z|
  new_hash = {}
    a = z.to_s
    new_hash[a] = z.chr
    temp << new_hash
  end
  temp
end