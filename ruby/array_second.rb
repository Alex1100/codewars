class Array
  def second
    if self.length < 2
      nil
    elsif self.length > 1
      self[1]
    end
  end
end

#tests
describe 'Array#second' do
  it 'returns the second element in the array' do
    Test.assert_equals([1,2,3].second, 2)
  end
  
  it 'returns nil if the array is empty' do
    Test.assert_equals([].second, nil)
  end
  
  it 'returns nil if the array has 1 element' do
    Test.assert_equals([1].second, nil)
  end
end