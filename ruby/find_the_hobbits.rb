#refactored
def find_hobbits_in(manifest)
  manifest.select { |resident|
    /halfling|hobbit|shire|farthing/i === resident.values_at(:race, :home).join
  }
end


#basic
def find_hobbits_in(collection)
  temp = []
  count = 0
  
  collection.each do |v|
    if v.values.include?('Hobbit') || v.values.include?('Halfling') || v.values.include?('half-halfling') || v.values.include?('The Shire') || v.values.include?('Hobbiton') || v.values.include?('South Farthing')
      temp << collection[count]
    end
    count += 1
  end
  temp
end


#tests
manifest01 = [
  {name:'Joe', race:'Human', home: 'Bree'},
  {name:'Dwalin', race:'Dwarve', home:'the mountain'},
  {name:'Loen', race:'Hobbit', home:' '},
  {name:'Oen', race:nil, home:'South Farthing'}
]

manifest02 = [
  {name:'Ferino', race:'human', home:nil},
  {name:'Oren', race:'half-halfling', home:nil},
  {name:'Roren', race:'hobbiton//bree', home:nil},
  {name:'Bilbo', race:'hobbit', home:'the shire'},
  {name:'Pippin', race:nil, home:nil}
]

manifest03 = [
  { name:'Kills-Hobbits', race:'Orc', home:nil},
  { name:'Lorena', race:nil, home:'the Shire'},
  { name:'Fargoth', race:'Wood Elf', home:'Monghob Bithil'}
]

describe 'Hobbit Kata' do

  it "should have find_hobbits_in(manifest) defined" do
    Test.expect(defined?(find_hobbits_in), "Your method should be named find_hobbits_in(manifest)")
  end
  
  it "should return potential hobbits from manifest 1" do
    Test.assert_equals(find_hobbits_in(manifest01), [
      {name:'Loen', race:'Hobbit', home:' '},
      {name:'Oen', race:nil, home:'South Farthing'}])
  end
  
  it "should return potential hobbits from manifest 2" do
    Test.assert_equals(find_hobbits_in(manifest02), [
      {name:'Oren', race:'half-halfling', home:nil},
      {name:'Roren', race:'hobbiton//bree', home:nil},
      {name:'Bilbo', race:'hobbit', home:'the shire'}])
  end
  
  it "should return potential hobbits from manifest 3" do
    Test.assert_equals(find_hobbits_in(manifest03), [
      { name:'Lorena', race:nil, home:'the Shire'}])
  end
  

end