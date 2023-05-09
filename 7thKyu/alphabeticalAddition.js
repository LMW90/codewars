/* Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.
Notes:

    Letters will always be lowercase.
    Letters can overflow (see second to last example of the description)
    If no letters are given, the function should return 'z'

Examples:

addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/
function addLetters(...letters) {
  // handle empty input
  if (!letters.length) return 'z';
  let letterString = 'abcdefghijklmnopqrstuvwxyz';
  // sum letters' positions
  let sum = letters.reduce((total, letter)=> total + 1 + letterString.indexOf(letter),0);
  // return resultant character
  return letterString[(sum-1)%26];
}