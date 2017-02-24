function isLanguageDiverse(list) {
  var getLanguages = list.map((dev) => dev.language);
  var pythonDevs = 0;
  var rubyDevs = 0;
  var javascriptDevs = 0;
  var truthy = '';

  for(var i = 0; i < getLanguages.length; i++){
    if(getLanguages[i] === 'Ruby'){
      rubyDevs++;
    }
    if(getLanguages[i] === 'Python'){
      pythonDevs++;
    }
    if(getLanguages[i] === 'JavaScript'){
      javascriptDevs++;
    }
  }

  if(((pythonDevs > (rubyDevs * 2)) || (pythonDevs > (javascriptDevs * 2))) || ((rubyDevs > (pythonDevs * 2)) || (rubyDevs > (javascriptDevs * 2))) || ((javascriptDevs > (pythonDevs * 2)) || (javascriptDevs > (rubyDevs * 2)))){
    truthy = false;
  } else {
    truthy = true;
  }

  return truthy;
}
