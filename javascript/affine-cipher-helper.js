//Prompt
// Description:

// The term "affine" was introduced to mathematics by Leonhard Euler in 1748. It comes from the Latin word affinis meaning "related." An affine transformation preserves the ratios of distances between points on a straight line. I.e. if you seek to generalize the concept, think of the characters of your alphabet as points on a straight line.

// The Affine Cipher is a monoalphabetic cipher that is slightly stronger than a Caesar Cipher. Given the modern alphabet, the Caesar Cipher has 26 possible keys, while the Affine Cipher has 312 possible keys. The Affine Cipher maps to the Caesar Cipher when a = 1, and the Atbash Cipher when a = b = m - 1.

// There are four factors that go into the cipher:

// x, the position in the alphabet of the current letter
// a, a number that must be coprime with the length of the alphabet (i.e. gcd(a, m) = 1)
// b, an non-negative integer
// m, the length of the alphabet
// The formula (a * x + b) % m evaluates to the position of the letter in the alphabet to substitute.

// Write a class that provides encode and decode methods for the Affine Cipher.

// Note: Your constructor must throw an error if a is not coprime with m.

// The function gcd has been provided to give you the greatest common denominator of two numbers. E.g. gcd(2, 4) == 2



//Solution
function AffineCipher(abc, a, b) {
  var m = abc.length;
  if(gcd(a,m)!==1 ) throw a+" isn't coprime of "+b
  var enc = abc.split('').map( function(c){ return abc[(a*abc.indexOf(c)+b)%m]}).join('')

  this.encode = function (str) {
      return str.split('').map( function(c){ return enc[abc.indexOf(c)]||c} ).join('')
  };
  this.decode = function (str) {
      return str.split('').map( function(c){ return abc[enc.indexOf(c)]||c} ).join('')
  };
}



//Tests
var desc = "Testing with lowercase Latin alphabet";
Test.describe(desc, function () {
  var abc = 'abcdefghijklmnopqrstuvwxyz';

  Test.it("Key of 1, 0", function () {
    var c = new AffineCipher(abc, 1, 0);
    Test.assertEquals(c.encode('abcdef'), 'abcdef');
    Test.assertEquals(c.encode('codewars'), 'codewars');
    Test.assertEquals(c.encode('yyz'), 'yyz');
    Test.assertEquals(c.encode('rush'), 'rush');
    Test.assertEquals(c.encode('chef goldblum'), 'chef goldblum');
    Test.assertEquals(c.encode('buffalobuffalo'), 'buffalobuffalo');
    Test.assertEquals(c.encode('abcdef'), 'abcdef');

    Test.assertEquals(c.decode('abcdef'), 'abcdef');
    Test.assertEquals(c.decode('buffalobuffalo'), 'buffalobuffalo');
    Test.assertEquals(c.decode('chef goldblum'), 'chef goldblum');
    Test.assertEquals(c.decode('rush'), 'rush');
    Test.assertEquals(c.decode('yyz'), 'yyz');
    Test.assertEquals(c.decode('codewars'), 'codewars');
    Test.assertEquals(c.decode('abcdef'), 'abcdef');
});

  Test.it("Key of 1, 1", function () {
    c = new AffineCipher(abc, 1, 1);
    Test.assertEquals(c.encode('abcdef'), 'bcdefg');
    Test.assertEquals(c.encode('codewars'), 'dpefxbst');
    Test.assertEquals(c.encode('yyz'), 'zza');
    Test.assertEquals(c.encode('abcdef'), 'bcdefg');
    Test.assertEquals(c.encode('rush'), 'svti');
    Test.assertEquals(c.encode('chef goldblum'), 'difg hpmecmvn');
    Test.assertEquals(c.encode('buffalobuffalo'), 'cvggbmpcvggbmp');

    Test.assertEquals(c.decode('bcdefg'), 'abcdef');
    Test.assertEquals(c.decode('difg hpmecmvn'), 'chef goldblum');
    Test.assertEquals(c.decode('dpefxbst'), 'codewars');
    Test.assertEquals(c.decode('zza'), 'yyz');
    Test.assertEquals(c.decode('svti'), 'rush');
    Test.assertEquals(c.decode('dpefxbst'), 'codewars');
    Test.assertEquals(c.decode('cvggbmpcvggbmp'), 'buffalobuffalo');
  });

  Test.it("Key of 1, 2", function () {
    c = new AffineCipher(abc, 1, 2);
    Test.assertEquals(c.encode('abcdef'), 'cdefgh');
    Test.assertEquals(c.encode('codewars'), 'eqfgyctu');
    Test.assertEquals(c.encode('yyz'), 'aab');
    Test.assertEquals(c.encode('rush'), 'twuj');
    Test.assertEquals(c.encode('chef goldblum'), 'ejgh iqnfdnwo');
    Test.assertEquals(c.encode('buffalobuffalo'), 'dwhhcnqdwhhcnq');
    Test.assertEquals(c.encode('codewars'), 'eqfgyctu');

    Test.assertEquals(c.decode('cdefgh'), 'abcdef');
    Test.assertEquals(c.decode('eqfgyctu'), 'codewars');
    Test.assertEquals(c.decode('aab'), 'yyz');
    Test.assertEquals(c.decode('twuj'), 'rush');
    Test.assertEquals(c.decode('ejgh iqnfdnwo'), 'chef goldblum');
    Test.assertEquals(c.decode('dwhhcnqdwhhcnq'), 'buffalobuffalo');
    Test.assertEquals(c.decode('eqfgyctu'), 'codewars');
  });

  Test.it("Key of 3, 0", function () {
    c = new AffineCipher(abc, 3, 0);
    Test.assertEquals(c.encode('abcdef'), 'adgjmp');
    Test.assertEquals(c.encode('codewars'), 'gqjmoazc');
    Test.assertEquals(c.encode('yyz'), 'uux');
    Test.assertEquals(c.encode('rush'), 'zicv');
    Test.assertEquals(c.encode('chef goldblum'), 'gvmp sqhjdhik');
    Test.assertEquals(c.encode('buffalobuffalo'), 'dippahqdippahq');
    Test.assertEquals(c.encode('codewars'), 'gqjmoazc');

    Test.assertEquals(c.decode('adgjmp'), 'abcdef');
    Test.assertEquals(c.decode('gqjmoazc'), 'codewars');
    Test.assertEquals(c.decode('uux'), 'yyz');
    Test.assertEquals(c.decode('zicv'), 'rush');
    Test.assertEquals(c.decode('gvmp sqhjdhik'), 'chef goldblum');
    Test.assertEquals(c.decode('dippahqdippahq'), 'buffalobuffalo');
    Test.assertEquals(c.decode('gqjmoazc'), 'codewars');

  });

  Test.it("Key of 19, 11", function () {
    c = new AffineCipher(abc, 19, 11);
    Test.assertEquals(c.encode('abcdef'), 'lexqjc');
    Test.assertEquals(c.encode('lobotomy'), 'mrerirfz');
    Test.assertEquals(c.encode('kingdom'), 'thyvqrf');
    Test.assertEquals(c.encode('trampoline'), 'iwlfkrmhyj');
    Test.assertEquals(c.encode('sliced bread'), 'pmhxjq ewjlq');
    Test.assertEquals(c.encode('generation'), 'vjyjwlihry');
    Test.assertEquals(c.encode('jeweler'), 'ajnjmjw');

    Test.assertEquals(c.decode('lexqjc'), 'abcdef');
    Test.assertEquals(c.decode('mrerirfz'), 'lobotomy');
    Test.assertEquals(c.decode('thyvqrf'), 'kingdom');
    Test.assertEquals(c.decode('iwlfkrmhyj'), 'trampoline');
    Test.assertEquals(c.decode('pmhxjq ewjlq'), 'sliced bread');
    Test.assertEquals(c.decode('vjyjwlihry'), 'generation');
    Test.assertEquals(c.decode('ajnjmjw'), 'jeweler');
  });

  desc = 'Should throw error for invalid keys';
  Test.it(desc, function () {
    desc = 'Failed to throw error';
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 2, 11);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 2, 21);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 4, 1);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 4, 19);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 8, 25);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 8, 9);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 22, 11);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 22, 9);
    });
  });
});


var desc = "Testing with lowercase Greek alphabet (without final-form sigma)";
Test.describe(desc, function () {
  var abc = 'αβγδεζηθικλμνξοπρστυφχψω';

  Test.it("Key of 1, 0", function () {
    var c = new AffineCipher(abc, 1, 0);
    Test.assertEquals(c.encode('αβγδεζ'), 'αβγδεζ');
    Test.assertEquals(c.encode('ήρωασ'), 'ήρωασ');
    Test.assertEquals(c.encode('ψψω'), 'ψψω');
    Test.assertEquals(c.encode('Αθήνα'), 'Αθήνα');
    Test.assertEquals(c.encode('σπαρτιατικόσ'), 'σπαρτιατικόσ');
    Test.assertEquals(c.encode('περσικόσ'), 'περσικόσ');
    Test.assertEquals(c.encode('αβγδεζ'), 'αβγδεζ');

    Test.assertEquals(c.decode('αβγδεζ'), 'αβγδεζ');
    Test.assertEquals(c.decode('ήρωασ'), 'ήρωασ');
    Test.assertEquals(c.decode('ψψω'), 'ψψω');
    Test.assertEquals(c.decode('Αθήνα'), 'Αθήνα');
    Test.assertEquals(c.decode('σπαρτιατικόσ'), 'σπαρτιατικόσ');
    Test.assertEquals(c.decode('περσικόσ'), 'περσικόσ');
    Test.assertEquals(c.decode('αβγδεζ'), 'αβγδεζ');
  });

  Test.it("Key of 1, 1", function () {
    c = new AffineCipher(abc, 1, 1);
    Test.assertEquals(c.encode('αβγδεζ'), 'βγδεζη');
    Test.assertEquals(c.encode('ήρωασ'), 'ήσαβτ');
    Test.assertEquals(c.encode('ψψω'), 'ωωα');
    Test.assertEquals(c.encode('Αθήνα'), 'Αιήξβ');
    Test.assertEquals(c.encode('σπαρτιατικόσ'), 'τρβσυκβυκλότ');
    Test.assertEquals(c.encode('περσικόσ'), 'ρζστκλότ');
    Test.assertEquals(c.encode('αβγδεζ'), 'βγδεζη');

    Test.assertEquals(c.decode('βγδεζη'), 'αβγδεζ');
    Test.assertEquals(c.decode('ήσαβτ'), 'ήρωασ');
    Test.assertEquals(c.decode('ωωα'), 'ψψω');
    Test.assertEquals(c.decode('Αιήξβ'), 'Αθήνα');
    Test.assertEquals(c.decode('τρβσυκβυκλότ'), 'σπαρτιατικόσ');
    Test.assertEquals(c.decode('ρζστκλότ'), 'περσικόσ');
    Test.assertEquals(c.decode('βγδεζη'), 'αβγδεζ');
  });

  Test.it("Key of 1, 2", function () {
    c = new AffineCipher(abc, 1, 2);
    Test.assertEquals(c.encode('αβγδεζ'), 'γδεζηθ');
    Test.assertEquals(c.encode('ήρωασ'), 'ήτβγυ');
    Test.assertEquals(c.encode('ψψω'), 'ααβ');
    Test.assertEquals(c.encode('Αθήνα'), 'Ακήογ');
    Test.assertEquals(c.encode('σπαρτιατικόσ'), 'υσγτφλγφλμόυ');
    Test.assertEquals(c.encode('περσικόσ'), 'σητυλμόυ');
    Test.assertEquals(c.encode('αβγδεζ'), 'γδεζηθ');

    Test.assertEquals(c.decode('γδεζηθ'), 'αβγδεζ');
    Test.assertEquals(c.decode('ήτβγυ'), 'ήρωασ');
    Test.assertEquals(c.decode('ααβ'), 'ψψω');
    Test.assertEquals(c.decode('Ακήογ'), 'Αθήνα');
    Test.assertEquals(c.decode('υσγτφλγφλμόυ'), 'σπαρτιατικόσ');
    Test.assertEquals(c.decode('σητυλμόυ'), 'περσικόσ');
    Test.assertEquals(c.decode('γδεζηθ'), 'αβγδεζ');
  });

  Test.it("Key of 5, 0", function () {
    c = new AffineCipher(abc, 5, 0);
    Test.assertEquals(c.encode('αβγδεζ'), 'αζλπφβ');
    Test.assertEquals(c.encode('ήρωασ'), 'ήιυαξ');
    Test.assertEquals(c.encode('ψψω'), 'οου');
    Test.assertEquals(c.encode('Αθήνα'), 'Αμήνα');
    Test.assertEquals(c.encode('σπαρτιατικόσ'), 'ξδαιτρατρχόξ');
    Test.assertEquals(c.encode('περσικόσ'), 'δφιξρχόξ');
    Test.assertEquals(c.encode('αβγδεζ'), 'αζλπφβ');

    Test.assertEquals(c.decode('αζλπφβ'), 'αβγδεζ');
    Test.assertEquals(c.decode('ήιυαξ'), 'ήρωασ');
    Test.assertEquals(c.decode('οου'), 'ψψω');
    Test.assertEquals(c.decode('Αμήνα'), 'Αθήνα');
    Test.assertEquals(c.decode('ξδαιτρατρχόξ'), 'σπαρτιατικόσ');
    Test.assertEquals(c.decode('δφιξρχόξ'), 'περσικόσ');
    Test.assertEquals(c.decode('αζλπφβ'), 'αβγδεζ');
  });

  Test.it("Key of 19, 11", function () {
    c = new AffineCipher(abc, 19, 11);
    Test.assertEquals(c.encode('λάθοσ'), 'κάαξψ');
    Test.assertEquals(c.encode('ωκεανόσ'), 'ροπμωόψ');
    Test.assertEquals(c.encode('μητέρα'), 'εζσέδμ');
    Test.assertEquals(c.encode('φωτογραφία'), 'θρσξβδμθίμ');
    Test.assertEquals(c.encode('πεινασμένοι πεινασμένοι ιπποπόταμοι'), 'ιπυωμψεέωξυ ιπυωμψεέωξυ υιιξιόσμεξυ');
    Test.assertEquals(c.encode('ρωμαϊκόσ'), 'δρεμϊοόψ');
    Test.assertEquals(c.encode('αγγλικόσ'), 'μββκυοόψ');

    Test.assertEquals(c.decode('κάαξψ'), 'λάθοσ');
    Test.assertEquals(c.decode('ροπμωόψ'), 'ωκεανόσ');
    Test.assertEquals(c.decode('εζσέδμ'), 'μητέρα');
    Test.assertEquals(c.decode('θρσξβδμθίμ'), 'φωτογραφία');
    Test.assertEquals(c.decode('ιπυωμψεέωξυ ιπυωμψεέωξυ υιιξιόσμεξυ'), 'πεινασμένοι πεινασμένοι ιπποπόταμοι');
    Test.assertEquals(c.decode('δρεμϊοόψ'), 'ρωμαϊκόσ');
    Test.assertEquals(c.decode('μββκυοόψ'), 'αγγλικόσ');
  });

  desc = 'Should throw error for invalid keys';
  Test.it(desc, function () {
    desc = 'Failed to throw error';
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 2, 11);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 2, 21);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 4, 0);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 4, 1);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 4, 19);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 8, 25);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 8, 9);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 22, 11);
    });
    Test.expectError(desc, function () {
      c = new AffineCipher(abc, 22, 9);
    });
  });
});
