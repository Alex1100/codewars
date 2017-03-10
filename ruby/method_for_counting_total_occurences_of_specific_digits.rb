class List
  def count_spec_digits(integer_list, digit_list)
    digit_list.map { |d| [d, integer_list.join.count(d.to_s)] }
  end
end

l = List.new

l.count_spec_digits([1, 2, 3, 4, 5], [1, 2, 3])

