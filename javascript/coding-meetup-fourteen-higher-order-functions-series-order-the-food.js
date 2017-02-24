function orderFood(list) {
  var mealRequests = list.map((dev) => dev.meal);
  var obj = {};
  for(var i = 0; i < mealRequests.length; i++){
    if(obj.hasOwnProperty(mealRequests[i])){
      obj[mealRequests[i]] = obj[mealRequests[i]] + 1;
    } else {
      obj[mealRequests[i]] = 1;
    }
  }

  return obj;
}
