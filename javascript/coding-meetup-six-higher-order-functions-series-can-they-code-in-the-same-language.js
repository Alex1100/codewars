function isSameLanguage(list) {
  var langs = list.map((lan) => (lan.language));
  var checkKeys = list.map((a) => a.hasOwnProperty('language'));
  var sortedLanguageList = langs.sort();

  if(checkKeys.length !== langs.length){
    return false;
  }

  if(sortedLanguageList[0] !== sortedLanguageList[sortedLanguageList.length - 1]){
    return false;
  } else {
    return true;
  }
}
