function askForMissingDetails(list) {
  var keys = list.map((dev) => Object.keys(dev).map((key) => key));
  var values = list.map((dev) => Object.keys(dev).map((key) => dev[key]));

  for(var i = 0; i < values.length; i++){
    for(var j = 0; j < values[i].length; j++){
      if(values[i][j] === null){
        list[i].question = `Hi, could you please provide your ${keys[i][j]}.`;
      }
    }
  }

  return list.filter((a) => a.hasOwnProperty('question'));
}
