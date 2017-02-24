function countDevelopers(list) {
  var count = 0;

  list.filter(function(dev) {
    if(dev['language'] === 'JavaScript' && dev['continent'] === 'Europe'){
      count++;
    }
  });

  return count;
}
