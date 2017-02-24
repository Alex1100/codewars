function isAgeDiverse(list) {
  var ageGroups = list.map((f) => f.age);
  var temp = [];

  for(var i = 0; i < ageGroups.length; i++){
    if(ageGroups[i] <= 19 && ageGroups[i] > 0){
      temp.push('teens');
    } else if(ageGroups[i] <= 29 && ageGroups[i] > 19){
      temp.push('twenties');
    } else if(ageGroups[i] <= 39 && ageGroups[i] > 29){
      temp.push('thirties');
    } else if(ageGroups[i] <= 49 && ageGroups[i] > 39){
      temp.push('fourties');
    } else if(ageGroups[i] <= 59 && ageGroups[i] > 49){
      temp.push('fifties');
    } else if(ageGroups[i] <= 69 && ageGroups[i] > 59){
      temp.push('sixties');
    } else if(ageGroups[i] <= 79 && ageGroups[i] > 69){
      temp.push('seventies');
    } else if(ageGroups[i] <= 89 && ageGroups[i] > 79){
      temp.push('eighties');
    } else if(ageGroups[i] <= 99 && ageGroups[i] > 89){
      temp.push('nineties');
    } else {
      temp.push('hundreds');
    }
  }
  //sort alphabetically
  temp.sort();

  //remove duplicates
  var deduped = temp.filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  });

  return deduped.length === 10 ? true : false;
}
