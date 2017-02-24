def sum_consecutives(s)
  s.chunk {|n| n}.map(&:last).map {|group| group.reduce(:+)}
end
