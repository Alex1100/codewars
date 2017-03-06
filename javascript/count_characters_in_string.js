function count(string) {
  var words = string.replace(/\s/g, '').split('');
  console.log(words);
  var newObj = {};

  for(var i = 0; i < words.length; i++){
    if(newObj[words[i]] === undefined){
      newObj[words[i]] = 0;
    }

    if(newObj.hasOwnProperty(words[i])){
      newObj[words[i]] += 1;
    }
  }
  return newObj;
}
