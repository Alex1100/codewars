def check_DNA(seq1, seq2)
  seq2 = seq2.reverse.tr("ATCG", "TAGC")
  seq1.include?(seq2) || seq2.include?(seq1)
end
