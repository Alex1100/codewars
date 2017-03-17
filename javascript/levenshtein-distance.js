function levenshtein(str1,str2){
  var negativeCount = 0;
  if (str1.length - str2.length > 1 || str2.length - str1.length > 1){
    negativeCount -= 1;
  }

  if(str1.length > str2.length){
    for(var i = 0; i < str1.length; i++){
      if(str1[i] !== str2[i]){
        negativeCount += 1;
      }
    }
  } else if(str1.length < str2.length){
    for(var i = 0; i < str2.length; i++){
      if(str1[i] !== str2[i]){
        negativeCount += 1;
      }
    }
  } else if(str1.length == str2.length){
    for(var i = 0; i < str2.length; i++){
      if(str1[i] !== str2[i]){
        negativeCount += 1;
      }
    }
  }

  return negativeCount;
}


//tests
Test.assertEquals(levenshtein("kitten", "sitting"), 3);
Test.assertEquals(levenshtein("book", "back"), 2);
Test.assertEquals(levenshtein("book", "book"), 0);
Test.assertEquals(levenshtein("qlzcfayxiz", "vezkvgejzb"), 9);
Test.assertEquals(levenshtein("nayvyedosf", "sjxen"), 9);
Test.assertEquals(levenshtein("sjxen", "sjxen"), 0);
Test.assertEquals(levenshtein("peter", "peter"), 0);
