function bingo(ticket, win){
  var miniwins = 0;

  var characs = ticket.map((a) => a[0]);
  var numComparisons = ticket.map((b) => b[1]);
  console.log(characs);
  console.log(numComparisons);

  for(var i = 0; i < characs.length; i++){
    for(var j = 0; j < characs[i].length; j++){
      if(numComparisons[i] === characs[i].charCodeAt(j)){
        miniwins++;
        break;
      }
    }
  }

  if(miniwins >= win){
    return 'Winner!';
  } else {
    return 'Loser!';
  }
}
