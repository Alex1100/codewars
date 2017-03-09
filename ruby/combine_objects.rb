def combine(*args)
  args = args.inspect
  objects = eval(args)
  result = []
  
  if objects.length > 1
    1.upto(objects.length - 1) do |i|
      objects[0] = objects[0].merge(objects[i]){|key, oldval, newval| newval + oldval}
      result << objects[0]
    end
  elsif objects.length == 1
    result = objects
  end
  
  return result.last.nil? && result.first.nil? ? {} : result.last
end