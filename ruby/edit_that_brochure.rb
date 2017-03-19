def render_inventory(current_inventory)
  designers = current_inventory.map{|v| v[:name]}
  description = current_inventory.map{|d| d[:products].map{|a| a[:name]}}
  price = current_inventory.map{|p| p[:products].map{|a| a[:price]}}
  temp = []
  count1 = price[0].length
  count2 = price[1].length
  0.upto(count1 - 1) do |b|
    temp << "#{designers[0]}, #{description[0][b]}, #{price[0][b]}"
  end
  0.upto(count2 - 1) do |c|
    temp << "#{designers[1]}, #{description[1][c]}, #{price[1][c]}"
  end
  temp
end


describe "Solution" do
  it "should test for something" do
    Test.assert_equals(render_inventory(current_inventory), stuff, "Failed Tests")
  end
end
