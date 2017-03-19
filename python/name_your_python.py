class Python:
  def __init__(self, name):
    self.name = name


#tests
import inspect

test.describe('Python class')
test.it('should be a class')
test.expect(inspect.isclass(Python), 'Python should be a class')

test.it('should support name')

bubba = Python('Bubba')
stripes = Python('stripes')
test.expect(bubba.name == 'Bubba', 'Expected Python.name to return "Bubba"')
test.expect(stripes.name == 'stripes')
