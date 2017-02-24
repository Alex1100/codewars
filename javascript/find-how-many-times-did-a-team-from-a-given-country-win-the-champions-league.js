function countWins(winnerList, input) {
  return winnerList.filter((winners) => winners.country === input).length;
}
