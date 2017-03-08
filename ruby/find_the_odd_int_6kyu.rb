def find_it(seq)
  new_hash = {}
  seq.each do |a|
    if new_hash[a]
      new_hash[a] = new_hash[a] + 1
    elsif new_hash[a].nil?
      new_hash.update(a => 0)
    end
  end
  new_hash = new_hash.reject{|k, v| v.odd?}
  new_hash.keys[0]
end
