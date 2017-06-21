//Prompt
// Description:

// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:

// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.



//Solution
class CaesarCipher{
  constructor(shift){
    this.shift = shift;
    this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.alphabet = {
      'A': [1, 27],
      'B': [2, 28],
      'C': [3, 29],
      'D': [4, 30],
      'E': [5, 31],
      'F': [6, 32],
      'G': [7, 33],
      'H': [8, 34],
      'I': [9, 35],
      'J': [10, 36],
      'K': [11, 37],
      'L': [12, 38],
      'M': [13, 39],
      'N': [14, 40],
      'O': [15, 41],
      'P': [16, 42],
      'Q': [17, 43],
      'R': [18, 44],
      'S': [19, 45],
      'T': [20, 46],
      'U': [21, 47],
      'V': [22, 48],
      'W': [23, 49],
      'X': [24, 50],
      'Y': [25, 51],
      'Z': [26, 52],
      '1': 'A',
      '2': 'B',
      '3': 'C',
      '4': 'D',
      '5': 'E',
      '6': 'F',
      '7': 'G',
      '8': 'H',
      '9': 'I',
      '10': 'J',
      '11': 'K',
      '12': 'L',
      '13': 'M',
      '14': 'N',
      '15': 'O',
      '16': 'P',
      '17': 'Q',
      '18': 'R',
      '19': 'S',
      '20': 'T',
      '21': 'U',
      '22': 'V',
      '23': 'W',
      '24': 'X',
      '25': 'Y',
      '26': 'Z',
      '27': 'A',
      '28': 'B',
      '29': 'C',
      '30': 'D',
      '31': 'E',
      '32': 'F',
      '33': 'G',
      '34': 'H',
      '35': 'I',
      '36': 'J',
      '37': 'K',
      '38': 'L',
      '39': 'M',
      '40': 'N',
      '41': 'O',
      '42': 'P',
      '43': 'Q',
      '44': 'R',
      '45': 'S',
      '46': 'T',
      '47': 'U',
      '48': 'V',
      '49': 'W',
      '50': 'X',
      '51': 'Y',
      '52': 'Z',
    };
  };

  encode(string){
    let newStr = [];
    string = string.toUpperCase();
    string.split('').map(s => {
      if(s === "'" || s === '.' || s === '?' || s === '!' ||s === ' '){
        newStr.push(s);
      } else if(this.numbers.includes(s.split('')[0])){
          newStr.push(s);
      } else {
        if(this.alphabet[s][0] + this.shift > 26){
          newStr.push(this.alphabet[((this.alphabet[s][1] + this.shift) -26)]);
        } else {
          newStr.push(this.alphabet[(this.alphabet[s][0] + this.shift)]);
        }
      }
    });
    return newStr.join('');
  };


  decode(string){
    let newStr = [];
    string = string.toUpperCase();
    string.split('').map(s => {
      if(s === "'" || s === '.' || s === '?' || s === '!' || s === ' '){
        newStr.push(s);
      } else if(this.numbers.includes(s.split('')[0])){
        newStr.push(s);
      } else {
        if(this.alphabet[s][0] - this.shift < 1){
          newStr.push(this.alphabet[((this.alphabet[s][1] + this.shift) + 26 - (this.shift * 2))]);
        } else {
          newStr.push(this.alphabet[(this.alphabet[s][0] - this.shift)]);
        }
      }
    });
    return newStr.join('');
  }
};




//Tests
Test.describe("Testing the CaesarCipher class", function () {
  var c;
  Test.it("Shift of 5", function () {
    c = new CaesarCipher(5);

    Test.assertEquals(c.encode('Codewars'), 'HTIJBFWX');
    Test.assertEquals(c.decode('HTIJBFWX'), 'CODEWARS');
    Test.assertEquals(c.encode('WAFFLES'), 'BFKKQJX');
    Test.assertEquals(c.decode('BFKKQJX'), 'WAFFLES');
    Test.assertEquals(c.encode("IT'S A SHIFT CIPHER!!"), "NY'X F XMNKY HNUMJW!!");
    Test.assertEquals(c.decode("NY'X F XMNKY HNUMJW!!"), "IT'S A SHIFT CIPHER!!");
  });
  Test.it("Shift of 13", function () {
    c = new CaesarCipher(13);
    var rs;

    Test.assertEquals(c.encode('CNAPNXRF'), 'PANCAKES');
    Test.assertEquals(c.decode('PANCAKES'), 'CNAPNXRF');
    Test.assertEquals(c.encode('JAVASCRIPT'), 'WNINFPEVCG');
    Test.assertEquals(c.decode('WNINFPEVCG'), 'JAVASCRIPT');
    for(var i = 0; i < 5; i++) {
      rs = Test.randomToken().toUpperCase();
      Test.assertEquals(c.decode(c.encode(rs)), rs);
    }
  });
  Test.it("Shift of 26", function () {
    c = new CaesarCipher(26);
    var rs;

    for(var i = 0; i < 7; i++) {
      rs = Test.randomToken().toUpperCase();
      Test.assertEquals(c.decode(rs), rs);
      Test.assertEquals(c.encode(rs), rs);
    }
  });
});
