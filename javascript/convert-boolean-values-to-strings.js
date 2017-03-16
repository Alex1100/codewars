function boolToWord( bool ){
  return bool ? "Yes" : "No";
}

//tests
console.log("Basic tests: ' true '/' false '")
Test.assertEquals(boolToWord(true), 'Yes')
Test.assertEquals(boolToWord(false), 'No')

console.log("Tests for true values")
Test.assertEquals(boolToWord(0<1), 'Yes' )
Test.assertEquals(boolToWord(!(0>1)), 'Yes' )
Test.assertEquals(boolToWord(typeof boolToWord=="function" ), 'Yes' )
Test.assertEquals(boolToWord(!0), 'Yes' )

console.log("Tests for false values")
Test.assertEquals(boolToWord(0>1), 'No' )
Test.assertEquals(boolToWord(!(0<1)), 'No' )
Test.assertEquals(boolToWord(typeof boolToWord=="string" ), 'No' )
Test.assertEquals(boolToWord(!1), 'No' )
