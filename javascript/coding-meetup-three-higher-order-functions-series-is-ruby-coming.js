function isRubyComing(list) {
  var truthy = false;
  var b = list.map((a) => (a.language));

  if(b.includes('Ruby')){
    truthy = true;
  }

  return truthy;
}
