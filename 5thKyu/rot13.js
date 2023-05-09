/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(message){
  // type out letters
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // rotate letters, ignore rest and return
  return message.split('').map(char => {
    let lowerIndex = lowerCase.indexOf(char);
    if (lowerIndex !== -1) return lowerCase[(lowerIndex + 13) % 26];
    let upperIndex = upperCase.indexOf(char);
    if (upperIndex !== -1) return upperCase[(upperIndex + 13) % 26];
    return char;
  }).join('');
}