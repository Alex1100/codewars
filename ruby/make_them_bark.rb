class Dog
  attr_accessor :name, :species, :sex, :age
  
  def intialize(name, species, sex, age)
    @name = name
    @species = species
    @sex = sex
    @age = age
  end
  
  def bark
    return 'Woof!'
  end

end