function realSize(arrays) {
  var count = 0;
  
  for(var i = 0; i < arrays.length; i++){
    if(arrays[i] instanceof Array){
      count++;
      for(var z = 0; z < arrays[i].length; z++){
        if(arrays[i] instanceof Array){
          count++;
        }
      }
    }
  }
  
  for(var j = 0; j <= count; j++){
    var merged = [].concat.apply([], arrays);
    arrays = merged;
  }
  
  return arrays.filter((element) => typeof element === 'number').length;
}