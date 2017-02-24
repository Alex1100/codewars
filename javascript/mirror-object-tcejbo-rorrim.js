const mirror = obj => {
  var keys = Object.keys(obj).map((a) => a);
  var values = [];
  var element = '';
  var newObj = {};

  for(var j = 0; j < keys.length; j++){
    for(var z = keys[j].length - 1; z >= 0; z--){
      element += keys[j][z];
    }
    values.push(element);
    element = '';
  }

  for(var i = 0; i < keys.length; i++){
    newObj[keys[i]] = values[i];
  }

  return newObj;
};
