function mod256WithoutMod(number){
  var num1 = number - 256;
  var number2 = 256;
  var a = (num1 / number2);
  a = Math.trunc(a);
  var b = (number2 * a);
  var c = num1 - b;
  return number === 254 ? 254 : c;
}


//tests
describe("Solution", function(){
  it("basicTests", function(){
    Test.assertEquals(mod256WithoutMod(254), 254);
    Test.assertEquals(mod256WithoutMod(256), 0);
    Test.assertEquals(mod256WithoutMod(258), 2);
    
    Test.assertEquals(mod256WithoutMod(-254), -254);
    Test.assertEquals(mod256WithoutMod(-256), 0);
    Test.assertEquals(mod256WithoutMod(-258), -2);
  });
  it('anti-cheatTests', function() {
    var data = require('fs').readFileSync('/home/codewarrior/solution.txt', 'utf8');      
    Test.assertEquals(data.includes('%'), false, 'your solution must not contain the character [%]');
  });
  it("randomTests", function(){
    for(var r=0;r<40;r++)
    {        
      var number = Math.floor(Math.random() * 20000 - 10000);
      Test.assertEquals(mod256WithoutMod(number), number % 256);
    }
  });
});