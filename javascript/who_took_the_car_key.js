const whoTookTheCarKey = msg => msg.map(x => String.fromCharCode(parseInt(x,2))).join('')


//tests
const names = ['Alexander', 'Jeremy', 'Chris', 'Jessica', 'Jeremy', 'Robert', 'Hillary', 'Donald', 'Albert', 'Jilbert', 'Hubert', 'Oakley', 'Charlie', 'Azariah', 'Landry', 'Skyler', 'Justice', 'Armani', 'Frankie', 'Lennon',
               'Dakota', 'Emerson', 'Casey', 'Finley', 'Lennox', 'Hayden', 'River', 'Briar', 'Tatum', 'Phoenix', 'Emory', 'Remy', 'Royal', 'Milan', 'Rowan', 'Sutton', 'Shiloh', 'Jessie', 'Amari', 'Rory', 'Sage', 'Jamie',
               'Dallas', 'Leighton', 'Remington', 'Ellis', 'Riley', 'Peyton', 'Harley', 'Quinn', 'Alexis', 'Kamryn', 'Sawyer', 'Eden', 'Parker', 'Avery', 'Elliot', 'Elliott', 'Lyric', 'Rylan', 'Ariel', 'Jordan', 'Reese',
               'Angel', 'Zion', 'Karter', 'Blake', 'Taylor', 'Marley', 'Payton', 'London', 'Morgan', 'Kendall', 'Emery', 'Kai', 'Micah', 'Jordyn', 'Cameron', 'Ryan', 'Dylan', 'Kayden', 'Reagan', 'Skylar', 'Logan', 'Carter',
               'Hunter', 'Jayden', 'Harper', 'Streetlamp Le Moose'];
const messages = shuffle(names).map( (name) => [...name].map( (char) => ('00000000' + char.charCodeAt(0).toString(2)).slice(-8) ) );

for (message of messages)
  test(message, whoTookTheCarKey);

function test(charCodes, func) {
  const name = String.fromCharCode(...charCodes.map( (s) => parseInt(s, 2) ));
  Test.assertEquals(func(charCodes), name);
}

// Fisher–Yates shuffle
function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}