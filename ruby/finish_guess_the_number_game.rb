class Guesser
  def initialize(number, lives)
    @number = number
    @lives = lives
  end
  
  
  def guess(n)
    if @lives > 0
      if n == @number
        true
      elsif n != @number
        @lives -= 1
        false
      end
    elsif @lives == 0
      raise ArgumentError "Omae wa mo shindeiru"
    end
  end
end


#tests
Test.describe('Basic tests') do
Test.it('Correct guess should return true') do
guesser = Guesser.new(10, 2)
guesser.guess(10)
guesser.guess(10)
guesser.guess(10)
guesser.guess(10)
Test.assert_equals(guesser.guess(10), true)
end

Test.it('Wrong guess should return false') do
guesser = Guesser.new(10, 2)
guesser.guess(1)
Test.assert_equals(guesser.guess(1),false)
end

Test.it('Lives ran out should throw') do
guesser = Guesser.new(10, 2)
guesser.guess(1)
guesser.guess(2)
    
Test.expect_error('Expect error: "Omae wa mo shindeiru"') do guesser.guess(10) end
end
end

Test.describe('Basic tests') do
def randint(a,b) rand(b-a+1)+a end

10.times do
  number=randint(-10,10)
  lives=randint(4,10)
  guesser = Guesser.new(number,lives)
  10.times do
    n=randint(0,1)==0 ? number : number+(-1)**randint(0,1)*randint(1,10)
    Test.it("Testing for #{n} with #{number} as a correct answer and #{lives>0 ? lives : "no"} lives left") do
    if lives>0 then
      Test.assert_equals(guesser.guess(n),n==number,"It should work for random inputs too")
      if n!=number then lives-=1 end
    else
      Test.expect_error('Expect error: "Omae wa mo shindeiru"') do guesser.guess(n) end
    end
    end
  end
end
end