//Prompt
// The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). In this kata, we're implementing Vigenère's autokey cipher.

// The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

// From Wikipedia:

// The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.
// (...)

// In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.
// The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

// With the basic Vigenère Cipher, we assume the key is repeated for the length of the text, character by character. In this kata, the key is only used once, and then replaced by the decoded text. Every encoding and decoding is independent (still using the same key to begin with). Unlike the Vigenère Cipher Helper kata, the key index is only incremented if the current letter is in the provided alphabet.

// Visual representation (suggested by OverZealous):

// message: my secret code i want to secure
// key:     pa ssword myse c retc od eiwant
// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

// E.g.

// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// var key = 'password';

// // creates a cipher helper with each letter substituted
// // by the corresponding character in the key
// var c = new VigenèreCipher(key, alphabet);

// c.encode('codewars'); // returns 'rovwsoiv'
// c.decode('laxxhsj'); // returns 'waffles'

// // returns 'pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib'
// c.encode('amazingly few discotheques provide jukeboxes')

// // returns 'amazingly few discotheques provide jukeboxes'
// c.decode('pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib')
// Any character not in the alphabet should be left alone.

// E.g. (following from above)

// c.encode('CODEWARS'); // returns 'CODEWARS'

//Solution
function VigenèreAutokeyCipher(origKey, abc) {
  this.encode = function (str) {
    let ignore = 0, key = origKey;
    return str.split('').map((z, i) => {
      if(abc.indexOf(z) == -1) {
        ignore++; return z;
      }
      key = key.concat(z);
      return abc[(abc.indexOf(z) + abc.indexOf(key[i - ignore])) % abc.length];
    }).join('');
  };
  this.decode = function (str) {
    let ignore = 0, key = origKey;
    return str.split('').map((z, i) => {
      if(abc.indexOf(z) == -1) {ignore++; return z;}
      var ind = abc.indexOf(z) - abc.indexOf(key[i - ignore]),
          out = abc[ind < 0 ? ind + abc.length : ind];
      key = key.concat(out);
      return out;
    }).join('');
  };
}




//Tests
var desc = "Testing with lowercase latin alphabet";
Test.describe(desc, function () {
  var abc = 'abcdefghijklmnopqrstuvwxyz';

  Test.it("Password of 'password'", function () {
    var c = new VigenèreAutokeyCipher('password', abc);

    Test.assertEquals(c.decode('rovwsoiv'), 'codewars');
    Test.assertEquals(c.encode('codewars'), 'rovwsoiv');
    Test.assertEquals(c.encode('waffles'), 'laxxhsj');
    Test.assertEquals(c.decode('laxxhsj'), 'waffles');
    Test.assertEquals(c.encode('aaaaaaaapasswordaaaaaaaa'), 'passwordpasswordpassword');
    Test.assertEquals(c.decode('passwordpasswordpassword'), 'aaaaaaaapasswordaaaaaaaa');
    Test.assertEquals(c.decode("xt'k s ovzib vapzlz!"), "it's a shift cipher!");
    Test.assertEquals(c.encode("it's a shift cipher!"), "xt'k s ovzib vapzlz!");

  });
  Test.it("Password of 'pizza'", function () {
    var c = new VigenèreAutokeyCipher('pizza', abc);

    Test.assertEquals(c.encode('asodakme'), 'pancakes');
    Test.assertEquals(c.decode('pancakes'), 'asodakme');
    Test.assertEquals(c.decode('yiuzslrdpl'), 'javascript');
    Test.assertEquals(c.encode('javascript'), 'yiuzslrdpl');

  });
  Test.it("Password of 'attackatdawn', random tokens", function () {
    var c = new VigenèreAutokeyCipher('attackatdawn', abc);
    var i, token;
    for(i = 0; i < 5; i++) {
      token = Test.randomToken();
      Test.assertEquals(c.encode(c.decode(token)), token);
      Test.assertEquals(c.decode(c.encode(token)), token);
    }
  });
});

desc = "Testing with katakana alphabet"
Test.describe(desc, function () {
  var abc = 'アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー';
  Test.it("Password of 'カタカナ'", function () {
    var c = new VigenèreAutokeyCipher('カタカナ', abc);

    Test.assertEquals(c.encode('カタカナ'), 'タモタワ');
    Test.assertEquals(c.decode('タモタワ'), 'カタカナ');
    Test.assertEquals(c.encode('javascript'), 'javascript');
    Test.assertEquals(c.decode('javascript'), 'javascript');
    Test.assertEquals(c.encode('ドモアリガトゴザイマス'),'ドレタウガロゴザヤマォ');
    Test.assertEquals(c.decode('ドレタウガロゴザヤマォ'),'ドモアリガトゴザイマス');
  });
});

desc = "Testing with hiragana alphabet"
Test.describe(desc, function () {
  var abc = 'あいうえおぁぃぅぇぉかきくけこさしすせそたちつってとなにぬねのはひふへほまみむめもやゃゆゅよょらりるれろわをんー';
  Test.it("Password of 'ひらかな'", function () {
    var c = new VigenèreAutokeyCipher('ひらかな', abc);

    Test.assertEquals(c.encode('ひらがな'), 'ぇむがま');
    Test.assertEquals(c.decode('ぇむがま'), 'ひらがな');
    Test.assertEquals(c.encode('javascript'), 'javascript');
    Test.assertEquals(c.decode('javascript'), 'javascript');
    Test.assertEquals(c.decode('どしららがろござやまぉ'),'どもあみがとございまぬ');
    Test.assertEquals(c.encode('どもあみがとございまぬ'),'どしららがろござやまぉ');
  });
});
