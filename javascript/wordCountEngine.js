const wordCountEngine = (document) => {
  let result = [];
  let words = document.split(' ');
  let dictionary = {};
  let filteredWords = words.map(wor => wor.toLowerCase().replace(/['.?!]/gi, ''));

  filteredWords.forEach((word, i) => {
    dictionary[word] ? dictionary[word]++ : dictionary[word] = 1;
  });

  for(let key in dictionary){
    result.push([key, dictionary[key]]);
  }

  result.sort((a, b) => {
    return b[1] - a[1];
  });

  return result;
};

wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!");


// result = [ [ 'practice', 3 ],
//   [ 'perfect', 2 ],
//   [ 'makes', 1 ],
//   [ 'youll', 1 ],
//   [ 'only', 1 ],
//   [ 'get', 1 ],
//   [ 'by', 1 ],
//   [ 'just', 1 ] ]
