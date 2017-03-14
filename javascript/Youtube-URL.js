const makeYoutubeLink = s => `https://www.youtube.com/embed/${s.slice(-11)}`;

//tests
describe("Example tests", function(){
  it("test", function(){
    Test.assertEquals(makeYoutubeLink('https://www.youtube.com/embed/L3JxAuUyjzY'), "https://www.youtube.com/embed/L3JxAuUyjzY")
    Test.assertEquals(makeYoutubeLink('https://www.youtube.com/watch?v=L3JxAuUyjzY'), "https://www.youtube.com/embed/L3JxAuUyjzY")
    Test.assertEquals(makeYoutubeLink('https://youtu.be/L3JxAuUyjzY'), "https://www.youtube.com/embed/L3JxAuUyjzY")
  });
});

describe("Random tests", function(){
  it("test", function(){
    for (var i=0; i < 300; i++) {
      var string = generateString();
      Test.assertEquals(makeYoutubeLink(generateScheme()+wwwOrNot()+generateDomain()+generatePath()+string), "https://www.youtube.com/embed/"+string)
    }
  });
});

function getRand(max) {
  var rand = Math.random() * max;
  return rand - (rand%1);
}

function generateString() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var length = 11;
  var str = '';
  for (var i = 0; i < length; i++) {
      str += chars.charAt(getRand(chars.length - 1));
  }
  return str;
}

function generateScheme() {
    var arr = ['http://', 'https://', ''];
    return arr[getRand(arr.length - 1)];
}

function wwwOrNot() {
    var arr = ['www.', ''];
    return arr[getRand(arr.length - 1)];
}

function generateDomain() {
    var arr = ['youtube.com/', 'youtu.be/', 'youtube.de/', 'youtube.com.ua/', 'youtube.ru/'];
    return arr[getRand(arr.length - 1)];
}

function generatePath() {
    var arr = ['embed/', 'watch?v=', 'watch?i=', 'beta/', ''];
    return arr[getRand(arr.length - 1)];
}