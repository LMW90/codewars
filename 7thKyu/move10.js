/* Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/
function moveTen(s){
  // store alphabet in enumerable
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // shift index of character by 10 mod 26 and swap
  return s.split('').map(char=> alphabet[(alphabet.indexOf(char)+10)%26]).join('');
}