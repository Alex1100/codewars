function validateNumber(str){
  var pattern = /(\+|\-)?(0|44)7\-*(\-*\d){9}-?\b/g; 
  return str.match(pattern) ? 'In with a chance' : 'Plenty more fish in the sea';
}

//tests
Test.assertEquals(validateNumber('07454876120'), 'In with a chance')
Test.assertEquals(validateNumber('0754876120'), 'Plenty more fish in the sea', 'Number too short')
Test.assertEquals(validateNumber('0745--487-61-20'), 'In with a chance')
Test.assertEquals(validateNumber('+447535514555'), 'In with a chance')

Test.assertEquals(validateNumber('-07599-51-4555'), 'In with a chance')
Test.assertEquals(validateNumber('075335440555'), 'Plenty more fish in the sea', 'Number too long')
Test.assertEquals(validateNumber('+337535512555'), 'Plenty more fish in the sea', 'Not a Briish prefix')
Test.assertEquals(validateNumber('00535514555'), 'Plenty more fish in the sea', 'Should start 07')

//Random tests below 

function generateRandomNumber() {

 var numbersAtEnd = Math.floor((Math.random()*1000000000) + 1000000000).toString().slice(1); 
 var randomNumber = Math.random(); 

  if (randomNumber < .25) {
    return '07' + numbersAtEnd; 
  }
  if (randomNumber < .5) {
    return '+447' + numbersAtEnd;
  }
  if (randomNumber < .75) {
    return '07' + numbersAtEnd.slice(0,5) + '--' + numbersAtEnd.slice(5); 
  }
  else {
    return numbersAtEnd; 
  }
}

//My solution below 

function myValidateNumbers(str){

 str = str.replace(/-/g,'')
  
  if (str.length === 0){
    return 'Plenty more fish in the sea'; 
  }
  if (str.length < 11){
    return 'Plenty more fish in the sea'; 
  }
  if (str.length === 11){
     if (str.slice(0,2) === '07'){
      return "In with a chance";
     }
     else {
      return "Plenty more fish in the sea"; 
     }
  }
  if (str.length > 11) {
    if (str.slice(0,4) === '+447' && str.length === 13){
      return "In with a chance"; 
    } 
    else {
      return 'Plenty more fish in the sea'; 
    }
  }
}

for (var i=0; i<20; i++){
   var exampleNumber = generateRandomNumber(); 
     var myResult = myValidateNumbers(exampleNumber); 
     var theirResult = validateNumber(exampleNumber); 
   Test.assertEquals(theirResult, myResult); 
}