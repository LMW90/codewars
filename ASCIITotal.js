/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/
function uniTotal (string) {
  // convert string to array of characters and sum char codes of those
 return string.split('').reduce((total, char) => total += char.charCodeAt(0), 0 )
}