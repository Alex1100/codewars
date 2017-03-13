function validPhoneNumber(phoneNumber){
  return /^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$/.test(phoneNumber);
}


//tests
Test.assertEquals(validPhoneNumber("(123) 456-7890"), true);
Test.assertEquals(validPhoneNumber("(1111)555 2345"), false);
Test.assertEquals(validPhoneNumber("(098) 123 4567"), false);
Test.assertEquals(validPhoneNumber("(123)456-7890"), false);
Test.assertEquals(validPhoneNumber("abc(123)456-7890"), false);
Test.assertEquals(validPhoneNumber("(123)456-7890abc"), false);
Test.assertEquals(validPhoneNumber("abc(123)456-7890abc"), false);
Test.assertEquals(validPhoneNumber("abc(123) 456-7890"), false);
Test.assertEquals(validPhoneNumber("(123) 456-7890abc"), false);
Test.assertEquals(validPhoneNumber("abc(123) 456-7890abc"), false);