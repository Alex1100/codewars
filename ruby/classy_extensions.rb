#refactored
class Cat < Animal
  def speak
    "#{@name} meows."
  end
end

#basic
class Cat < Animal
  attr_accessor :name

  def initialize(name)
    self.name = name
  end

  def speak
    "#{self.name} meows."
  end
end