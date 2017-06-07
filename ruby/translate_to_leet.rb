#prompt
# An angry wizard cast a spell on your friend. Your buddeh can now only speak in gibberish. However, after tracking down the wizard, you've found his translation scroll below.
# There are four conditions:
# 1. You must not repeat the same key consecutively if there are more than one(the order of keys in the scroll is important!).
# Ex1:
# 'aaaa' # => '4@4@'

# 2. The input will consist only of lowercase alphabetical characters(a-z) and single spaces.
# Ex2:
# 'a a a a a a a' # => '4 @ 4 @ 4 @ 4'

# 3. If a key does not exist for a character, keep the character as is('m' is one such character without a key).
# Ex3:
# 'mama' #=> 'm4m@'

# 4. The strings must represent the Key(s) on the scroll, meaning that certain characters might have to be escaped.





#solution
def to_leet(str)
  scroll = {
    "a".to_sym => [0, ['4', '@']],
    "b".to_sym => [0, ['|3', '8']],
    "d".to_sym => [0, ['|)', 'o|']],
    "e".to_sym => [0, ['3']],
    "f".to_sym => [0, ['|=']],
    "g".to_sym => [0, ['9', '6']],
    "h".to_sym => [0, ['|-|', ']-[', '}-{', '(-)', ')-(', '#']],
    "i".to_sym => [0, ['1', '!', '][']],
    "j".to_sym => [0, ['_|']],
    "k".to_sym => [0, ['|<', '|{']],
    "l".to_sym => [0, ['|_']],
    "n".to_sym => [0, ['|\\|']],
    "o".to_sym => [0, ['0']],
    "p".to_sym => [0, ['|2', '|D']],
    "q".to_sym => [0, ['(,)']],
    "r".to_sym => [0, ['|Z', '|?']],
    "s".to_sym => [0, ['5', '$']],
    "t".to_sym => [0, ['+', '7']],
    "v".to_sym => [0, ['|/', '\\/']],
    "w".to_sym => [0, ['\\^/', '//']],
    "x".to_sym => [0, ['><', '}{']],
    "y".to_sym => [0, ["`/"]],
    "z".to_sym => [0, ['(\\)']]
  }

  arr = str.split('')
  finalResult = ''


  0.upto(arr.length - 1) do |i|
    if arr[i] != ' '
      if scroll.keys.include? arr[i].to_sym
        if scroll[arr[i].to_sym][0] == scroll[arr[i].to_sym][1].length
          scroll[arr[i].to_sym][0] = 0;
        end
        finalResult += scroll[arr[i].to_sym][1][scroll[arr[i].to_sym][0]]
        scroll[arr[i].to_sym][0] = scroll[arr[i].to_sym][0] + 1
      else
        finalResult += arr[i]
      end
    else
      finalResult += arr[i]
    end
  end

  finalResult;
end






#tests
class Counter
  def initialize
    @counts = {"a"=>0, "b"=>0, "c"=>0, "d"=>0, "e"=>0, "f"=>0, "g"=>0, "h"=>0, "i"=>0, "j"=>0, "k"=>0, "l"=>0, "m"=>0, "n"=>0, "o"=>0, "p"=>0, "q"=>0, "r"=>0, "s"=>0, "t"=>0, "u"=>0, "v"=>0, "w"=>0, "x"=>0, "y"=>0, "z"=>0}
    @dict = {"a"=>[ '4', '@'], "b"=>['|3', '8'], "d"=>['|)', 'o|'], "e"=>['3'], "f"=>['|='], "g"=>['9', '6'], "h"=>['|-|', ']-[', '}-{', '(-)', ')-(', '#'], "i"=>['1', '!', ']['], "j"=>['_|'], "k"=>['|<', '|{'], "l"=>['|_'], "n"=>['|\|'], "o"=>['0'], "p"=>['|2', '|D'], "q"=>['(,)'], "r"=>['|Z', '|?'], "s"=>['5', '$'], "t"=>['+', '7'], "v"=>['|/', '\/'], "w"=>['\^/', '//'], "x"=>['><', '}{'], "y"=>['`/'], "z"=>['(\)']}
  end

  def reset_counts
    @counts.each { |k, v| @counts[k] = 0 }
  end

  def teel_ot(str)
    res = ''
    str.chars.each do |c|
      count = @counts[c]
      arr = @dict[c]
      if arr && count
        res << arr[ count >= arr.size ? @counts[c] = 0 : count]
        @counts[c] += 1
      else
        res << c
      end
    end
    self.reset_counts
    res
  end

end

cnt = Counter.new()
fixed_cases = ['boom headshot', 'booom boom boom boom headshott', 'yeeaa', 'yeah', 'yes', 'it owns', 'take that bbbbitch', 'my hearts beating', 'my hands are shaking', 'but im still shooting','still getting headshots' ]

describe "fixed test cases" do
  it "should correctly translate into gibberish" do

    fixed_cases.sample(5).each do |s|
      ans = cnt.teel_ot(s.dup)
      user_ans = to_leet(s.dup)
      fail_str = puts "Your result(unescaped)    :#{user_ans} \nExpected result(unescaped):#{ans}"
      Test.assert_equals(user_ans, ans, fail_str)
    end

  end

  pass = false;
  it "should work for randomized strings" do


    a = ('a'..'z').to_a
    50.times do
      str = ''
      rand(1..24).times { str << a[rand(0..25)] * (rand(1..10) == 5 ? rand(2..8) : 1 ) + (rand(0..4) == 2 ? ' ' : '') }
      ans = cnt.teel_ot(str.dup)
      user_ans = to_leet(str.dup)
      fail_str = (puts "Your result(unescaped)    :#{user_ans} \nExpected result(unescaped):#{ans}")
      Test.assert_equals(user_ans, ans, fail_str)
      pass = ans == user_ans
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
             blink-caret .5s step-end infinite alternate;}</style><div style="float:left;"><h3 id="fin">Thank you for completing my kata, please make a post if you have feedback or criticisms.</h3></div>' if pass
end
