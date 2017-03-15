#refactored
def solution(keys, default_value)
  Hash[keys.map {|key| [key, default_value]}]
end

#basic
def solution(keys, default_value)
  keys.map{|i| i.to_s}
  newObj = {}
  
  keys.each do |key|
    if newObj[key].nil? then newObj[key] = default_value end
  end
  
  newObj
end


#tests
result = solution([:draft, :completed], 0)
Test.expect(result.has_key?(:draft), "solution did not return correct keys")
Test.expect(result.has_key?(:completed), "solution did not return correct keys")
Test.expect(result[:draft] == 0, "solution did not return hash with correct default values")
Test.expect(result[:completed] == 0, "solution did not return hash with correct default values")