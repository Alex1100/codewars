function countLanguages(list) {
  var languages = list.map((lang) => lang.language);

  var languageCount = languages.reduce((allLanguages, language) => {
    if(language in allLanguages) {
      allLanguages[language]++;
    } else {
      allLanguages[language] = 1;
    }
    return allLanguages;
  }, {});

  return languageCount;
}
