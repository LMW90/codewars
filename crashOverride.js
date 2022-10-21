/* Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:

    Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', E: ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
*/
function aliasGen(first, last){
  const alias1 = first.toUpperCase()[0]
  const alias2 = last.toUpperCase()[0]
  if (alias1.toUpperCase() === alias1.toLowerCase() || alias2.toUpperCase() === alias2.toLowerCase()){
      return 'Your name must start with a letter from A - Z.'
  }
  return `${firstName[alias1]} ${surname[alias2]}`
}