#prompt
#Description:

#Write a method which takes arguments:

#hash
#keys (comma-separated symbols or strings)
#and it splits hash by given keys and returns array of hashes.

#If a key given as an argument is not present in the hash, the method should raise an exception

#In case there are any empty hash after splitting, it should be removed from resultant array.

#For example:

#returns [ {:a=>1, :b=>2}, {:c=>3, :d=>4}, {:e=>5, :f=>6} ]
#split_hash_by_key( { :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :c, :e )

#returns [ {:a=>1}, {:b=>2, :c=>3, :d=>4, :e=>5}, {:f=>6} ]
#split_hash_by_key( { :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :b, :f )

#returns [ {"a"=>1, "b"=>2, "c"=>3}, {"d"=>4, "e"=>5, "f"=>6} ]
#split_hash_by_key( { 'a'=>1, 'b'=>2, 'c'=>3, 'd'=>4, 'e'=>5, 'f'=>6 }, 'd' )

#returns [ {:a => 1, :b => 2} ]
#split_hash_by_key( {:a => 1, :b => 2}, :a )

#raises an exception
#split_hash_by_key( { :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, 'b' )



#solution
def split_hash_by_key(hash, *args)
  raise Error unless (args - hash.keys).empty?
  hash.slice_before { |k,v| args.include? k }.map { |a| Hash[a] }
end


#tests
describe 'split_hash_by_key' do
  it 'should return array of hashes splitted by :c and :e keys' do
    Test.assert_equals(split_hash_by_key({ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :c, :e),  [ {:a=>1, :b=>2}, {:c=>3, :d=>4}, {:e=>5, :f=>6} ]);
  end

  it 'should return array of hashes splitted by first key' do
    Test.assert_equals(split_hash_by_key({ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :a), [{ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }])
  end

  it 'should return array of hashes splitted by last key' do
    Test.assert_equals(split_hash_by_key({ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :f), [{ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5 }, { :f=>6 }])
  end

  it 'should return array of hashes splitted by :c key' do
    Test.assert_equals(split_hash_by_key({ 'a'=>1, 'b'=>2, 'c'=>3, 'd'=>4, 'e'=>5, 'f'=>6 }, 'b'), [{'a' => 1}, {'b'=>2, 'c'=>3, 'd'=>4, 'e'=>5, 'f'=>6}])
  end

  it 'should raise error if given hey does not exist in hash' do
    Test.expect_error('Method should raise error if any given as argument does not exist in hash.') { split_hash_by_key({ 'a'=>1, 'b'=>2, 'c'=>3, 'd'=>4, 'e'=>5, 'f'=>6 }, 'b', :e) }
  end
end
