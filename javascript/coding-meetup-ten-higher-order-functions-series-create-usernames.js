function addUsername(list) {
  var currentYear = new Date().getFullYear();

  list.forEach((person) => {
    person.username = person.firstName.toLowerCase() + person.lastName[0].toLowerCase() + (currentYear - person.age);
  });

  return list;
}
