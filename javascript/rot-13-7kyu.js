function rot13(s) {
  var a = "abcdefghijklmnopqrstuvwxyz"
  var b = "nopqrstuvwxyzabcdefghijklm"
  return s.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

//tests
describe("Basic tests", function() {
  it("should works as expected", function() {
    Test.assertEquals(rot13("a"), "n");
    Test.assertEquals(rot13("b"), "o");
    Test.assertEquals(rot13("c"), "p");
    Test.assertEquals(rot13("abc"), "nop");
    Test.assertEquals(rot13("nop"), "abc");
    Test.assertEquals(rot13("hello"), "uryyb");
    Test.assertEquals(rot13("hello world"), "uryyb jbeyq");
  });
});

function solution(s) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  return s.split('').map(x => abc.indexOf(x) === -1 ? x : abc[(abc.indexOf(x) + 13) % 26]).join('');
}

describe("Random tests", function() {
  it("should works as expected", function() {
    for(let i = 0; i < 10; i++) {
      let s = (Test.randomToken() + ' ' + Test.randomToken()).toLowerCase().replace(/\d/g, '');
      Test.assertEquals(rot13(s), solution(s));
    }
  });
});