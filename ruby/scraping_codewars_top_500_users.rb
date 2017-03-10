#You should get and parse the html of the codewars leaderboard page.

require 'nokogiri'
require 'open-uri'
Url = 'https://www.codewars.com/users/leaderboard'

class Person
  attr_accessor :name, :clan, :honor

  def initialize(data = {})
    @name = data[:name]
    @clan = data[:clan]
    @honor = data[:honor]
  end
end

class Leaderboard
  attr_accessor :position

  def initialize(data = [])
    @position = {}
    data.each_with_index {|d, i|@position[i+1] = Person.new(d)}
  end
end

def solution
  doc = Nokogiri::HTML(open(Url))
  leaderboard = []
  temp = []

  doc.css('div.leaderboard.pan table tr td').each do |link|
    temp << link.content
  end

  counter = 1

  temp.each_slice(4) do |element|
    element[3] = element[3].to_i
    element[1] = element[1].split(' ').pop.split('')
    element[1].shift
    element[1].shift
    element[1].shift
    element[1] = element[1].join
    leaderboard << {"name".to_sym => element[1], "clan".to_sym => element[2], "honor".to_sym => element[3]}
    counter += 1
  end

  Leaderboard.new(leaderboard)
end


#tests
require 'nokogiri'
require 'open-uri'


UserSol = Struct.new(:name, :clan, :honor)
LeaderboardSol = Struct.new(:position)


def get_html_sol(url)
  Nokogiri::HTML(open(url))
end


def process_data_sol(doc)
  table = doc.css('.leaderboard.pan > table')
  rows = table.css('tr')
  text_all_rows = rows[1..500].map do |row|
    user_name = row.attribute('data-username').value
    clan, honor = *row.css('td')[-2..-1].map(&:text)
    [user_name, clan, honor.to_i]
  end
end


def build_leaderboard
  rows = process_data_sol(get_html_sol('https://www.codewars.com/users/leaderboard'))
  users = rows.map { |r| UserSol.new(*r) }
  LeaderboardSol.new (Hash[(1..500).to_a.zip(users)])
end


user_ans = solution
ans = build_leaderboard
pass = true


describe "Fixed Tests: Leaderboard.position(top 5 users only)" do
  it "should have a size of 500" do
    Test.assert_equals(user_ans.position.size, 500 )
  end
  
  it "should contain 1st user's name" do
    Test.assert_equals(user_ans.position[1].name, ans.position[1].name)
  end
  it "should contain 500th user's name" do
    Test.assert_equals(user_ans.position[500].name, ans.position[500].name)
  end
  
  it "should contain the correct names" do
    5.times { |i| Test.assert_equals(user_ans.position[i+1].name, ans.position[i+1].name) }
  end
  it "should contain the correct clan" do
    5.times { |i| Test.assert_equals(user_ans.position[i+1].clan, ans.position[i+1].clan) }
  end
  it "should contain the correct honor" do
    5.times { |i| Test.assert_equals(user_ans.position[i+1].honor, ans.position[i+1].honor, "You might have to try again, since top 5 points change rapidly.") }
  end
end

describe "Randomized Tests: Leaderboard.position" do
  it "should contain the correct names" do
    50.times do
      i = rand(1..500)
      user_ans_name = user_ans.position[i].name
      ans_name = ans.position[i].name
      pass = user_ans_name == ans_name
      Test.assert_equals(user_ans_name, ans_name)
    end
  end
  it "should contain the correct clan" do
    50.times do
      i = rand(1..500)
      user_ans_clan = user_ans.position[i].clan
      ans_clan = ans.position[i].clan
      pass = user_ans_clan == ans_clan
      Test.assert_equals(user_ans_clan, ans_clan)
    end
  end  
  it "should contain the correct honor" do
    50.times do
      i = rand(1..500)
      user_ans_honor = user_ans.position[i].honor
      ans_honor = ans.position[i].honor
      pass = user_ans_honor == ans_honor
      Test.assert_equals(user_ans_honor, ans_honor)
    end
  end
end

puts '<style> @-webkit-keyframes typing { from { width: 0; } }
@-webkit-keyframes blink-caret { 50% { border-color: transparent; } }
#fin { 
  font: bold 1.25em monospace;
  color: #5f8120;
  border-right: .25em solid grey;
  border-left: 0em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  -webkit-animation: typing 5s steps(30, end),
  blink-caret .5s step-end infinite alternate;}</style><script> document.getElementById("fin").scrollIntoView() </script>
  <div style="float:left;"><h3 id="fin">Thank you for completing my kata, please make a post if you have feedback or criticisms.</h3></div>' if pass

# test comment to force revalidation of tests.