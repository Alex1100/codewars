//Prompt
// Description:

// Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

// Do not use built in functions.

// Usage:

// // should return 'dGhpcyBpcyBhIHN0cmluZyEh'
// 'this is a string!!'.toBase64();

// // should return 'this is a string!!'
// 'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
// You can learn more about Base64 encoding and decoding at https://en.wikipedia.org/wiki/Base64

//Solution
String.prototype.base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

String.prototype.toBase64 = function() {
  var i = 0, output = "";
  while (i < this.length) {
    var chr1 = this.charCodeAt(i++);
    var chr2 = this.charCodeAt(i++);
    var chr3 = this.charCodeAt(i++);

    var enc1 = chr1 >> 2;
    var enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    var enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    var enc4 = chr3 & 63;

    if (isNaN(chr2))
      enc3 = enc4 = 64;
    else if (isNaN(chr3))
      enc4 = 64;

    output += this.base64[enc1] + this.base64[enc2] + this.base64[enc3] + this.base64[enc4];
  }
  return output;
}

String.prototype.fromBase64 = function() {
  var i = 0, output = '';
  while (i < this.length) {
    var enc1 = this.base64.indexOf(this[i++]);
    var enc2 = this.base64.indexOf(this[i++]);
    var enc3 = this.base64.indexOf(this[i++]);
    var enc4 = this.base64.indexOf(this[i++]);

    var chr1 = (enc1 << 2) | (enc2 >> 4);
    var chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    var chr3 = ((enc3 & 3) << 6) | enc4;

    output += String.fromCharCode(chr1);
    if (enc3 != 64)
      output += String.fromCharCode(chr2);
    if (enc4 != 64)
      output += String.fromCharCode(chr3);
  }
  return output;
}



//Tests
var test = [
  ["this is a string!!","dGhpcyBpcyBhIHN0cmluZyEh"],
  ["this is a test!","dGhpcyBpcyBhIHRlc3Qh"],
  ["now is the time for all good men to come to the aid of their country.","bm93IGlzIHRoZSB0aW1lIGZvciBhbGwgZ29vZCBtZW4gdG8gY29tZSB0byB0aGUgYWlkIG9mIHRoZWlyIGNvdW50cnku"],
  ["1234567890  ", "MTIzNDU2Nzg5MCAg"],
  ["ABCDEFGHIJKLMNOPQRSTUVWXYZ ", "QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVog"],
  ["the quick brown fox jumps over the white fence. ","dGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSB3aGl0ZSBmZW5jZS4g"],
  ["dGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSB3aGl0ZSBmZW5jZS4","ZEdobElIRjFhV05ySUdKeWIzZHVJR1p2ZUNCcWRXMXdjeUJ2ZG1WeUlIUm9aU0IzYUdsMFpTQm1aVzVqWlM0"],
  ["VFZSSmVrNUVWVEpPZW1jMVRVTkJaeUFna","VkZaU1NtVnJOVVZXVkVwUFpXMWpNVlJWVGtKYWVVRm5h"],
  ["TVRJek5EVTJOemc1TUNBZyAg","VFZSSmVrNUVWVEpPZW1jMVRVTkJaeUFn"]
];
Array.prototype.rand = function(){
 var tmp = Math.floor(Math.random()*(this.length-1));
 if(tmp == actual){return this.rand();}
 return this[tmp];
}
var actual;
console.log("Encoding Check:");
for(var i = 0; i < 2; i++){
 actual = test.rand();
 Test.assertEquals(actual[0].toBase64(), actual[1]);
}
console.log("Decoding Check:");
for(var i = 0; i < 2; i++){
 actual = test.rand();
 Test.assertEquals(actual[1].fromBase64(), actual[0]);
}
console.log("Padding Check:");
for(var i = 0; i < 3; i++){
 actual = test.rand();
 Test.assertEquals(actual[0].toBase64().length % 4, 0);
}
Test.assertNotEquals("dGVzdA==".fromBase64().indexOf('test'), -1);
