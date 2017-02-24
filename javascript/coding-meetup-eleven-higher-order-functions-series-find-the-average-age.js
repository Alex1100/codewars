function getAverageAge(list) {
  var devs = list.map((dev) => dev.age);
  var sumOfAges = devs.reduce((sum, devAge) => sum + devAge, 0);
  return Math.round(sumOfAges / devs.length);
}
