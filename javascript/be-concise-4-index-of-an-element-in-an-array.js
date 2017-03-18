const find = (array, element) => array.includes(element) ? array.indexOf(element) : "Not found";

//tests
describe("Your refactored find() function", _ => {
  const CHAR_LIMIT = 85;
  it("should behave as expected", _ => {
    var array = [2,3,5,7,11];
    Test.assertEquals(find(array, 5), 2);
    Test.assertEquals(find(array, 11), 4);
    Test.assertEquals(find(array, 3), 1);
    Test.assertEquals(find(array, 2), 0);
    Test.assertEquals(find(array, 7), 3);
    Test.assertEquals(find(array, 1), "Not found");
    Test.assertEquals(find(array, 8), "Not found");
    array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
    Test.assertEquals(find(array, "Hello World"), 1);
    Test.assertEquals(find(array, "lorem ipsum"), "Not found");
    Test.assertEquals(find(array, "Lorem Ipsum"), 3);
    Test.assertEquals(find(array, false), 2);
    Test.assertEquals(find(array, true), 0);
    Test.assertEquals(find(array, Math.PI), 5);
    Test.assertEquals(find(array, 3.14), "Not found");
    Test.assertEquals(find(array, 6), 4);
  });
  it("should contain what I am looking for", _ => {
    Test.expect(/\.indexOf\(/.test(find.toString()), "Your refactored solution did not contain what I was looking for.  Keep researching :)");
  });
  it(`should contain no more than ${CHAR_LIMIT} characters`, _ => {
    console.log(`Your character count: ${find.toString().length}`);
    Test.expect(find.toString().length <= CHAR_LIMIT, "Your solution is too long.  Keep trying ;)");
  });
  it("should work for random tests", _ => {
    function standard(array, element) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
      }
      return "Not found";
    }
    var array, element;
    for (let i = 0; i < 666; i++) {
      array = [Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken(), Test.randomToken()];
      element = Test.randomToken();
      array[Math.floor(array.length * Math.random())] = Test.randomNumber() > 90 ? Test.randomToken() : element;
      Test.assertEquals(find(array, element), standard(array, element));
    }
  });
});
