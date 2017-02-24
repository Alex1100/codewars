function getFirstPython(list) {
  var pythonDevPresent = list.some((dev) => (dev.language === 'Python'));
  var getPythonDevs = list.filter((dev) => (dev.language === 'Python'));

  if(pythonDevPresent === false){
    return 'There will be no Python developers';
  } else {
    for(var i = 0; i < 1; i++){
      return `${getPythonDevs[i].firstName}, ${getPythonDevs[i].country}`;
    }
  }
}
