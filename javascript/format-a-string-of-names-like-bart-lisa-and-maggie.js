function list(names){
 var peopleNames = names.map((person) => person.name);
 if(peopleNames.length > 1){
  peopleNames.splice(peopleNames.length -1, 0, '&');
  arr = peopleNames.splice(0, peopleNames.indexOf('&'));
  var a = arr.join(', ');
  var b = peopleNames.join(' ');
  var c = a + ' ' +  b;
  return c;
 } else if(peopleNames.length === 1) {
   return peopleNames[0];
 } else {
   return '';
 }
}
