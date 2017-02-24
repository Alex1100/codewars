function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(function(person) {
    var sum = 0;
    for (var i = 0; i < person.firstName.length; i++) {
      sum += person.firstName.charCodeAt(i);
    }
    return sum % 2 !== 0;
  });
}
