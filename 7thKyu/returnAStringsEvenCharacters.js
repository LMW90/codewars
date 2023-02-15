/* Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/
function evenChars(string) {
//   return (string.length > 1 && string.length < 101) 
//     ? string.split('').filter((_, index) => index % 2 !== 0) 
//     : 'invalid string';
  // faster
  if (string.length < 2 || string.length > 100) return 'invalid string';
  let result = [];
  for (let i = 0; i < string.length; i++){
    if (i % 2 !== 0) result.push(string[i]);
  }
  return result;
}