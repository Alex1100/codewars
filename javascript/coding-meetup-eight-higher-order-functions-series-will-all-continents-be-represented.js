function allContinents(list) {
  var continents = list.map((f) => f.continent);
  continents.sort();
  var deduped = continents.filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  });

  return deduped.length === 5 ? true : false;
}
