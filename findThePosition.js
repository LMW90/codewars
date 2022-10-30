/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/
function position(letter){
  // look up character code - code of 'a' character and assign to variable
  let position = letter.charCodeAt() - 'a'.charCodeAt() + 1
  // return template literal with position
  return `Position of alphabet: ${position}`
}