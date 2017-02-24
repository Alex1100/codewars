def persistence(n)
    str = n.to_s.chars.map(&:to_i)
    return 0 if str.length == 1
    1 + persistence(str.inject(&:*))
end
