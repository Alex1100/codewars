function greetDevelopers(list) {
  // thank you for checking out my kata :)
  list.map((person) => person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`);

  return list;
}
