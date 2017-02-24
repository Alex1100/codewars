function findSenior(list) {
  var getDevelopers = list.map((dev) => (dev));
  var compareDevAges = list.map((person) => person.age);
  var a = Math.max.apply(null, compareDevAges);
  var filterByAge = function(element){
    return element.age >= a;
  };

  return getDevelopers.filter(filterByAge);
}
