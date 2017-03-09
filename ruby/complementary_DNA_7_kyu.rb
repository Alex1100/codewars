def DNA_strand(dna)
  dna = dna.split('')
  temp = []

  dna.each do |a|
    if a == "A" then temp << "T" end
    if a == "T" then temp << "A" end
    if a == "C" then temp << "G" end
    if a == "G" then temp << "C" end
  end
  temp.join('')
end
