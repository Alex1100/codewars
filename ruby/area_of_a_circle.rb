def circle_area r
  if r.to_f > 0
    area = sprintf "%.2f", Math::PI * (r * r)
    area.to_f
  else
    false
  end
end
