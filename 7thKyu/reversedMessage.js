/* Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/
function reverseMessage(str) {
  // handle empty input
  if (!str) return str;
  // split input into words
  let words = str.split(" ");
  // reverse words' characters and lowercase them
  words = words.map(word => word.split("").reverse().join("").toLowerCase());
  // uppercase words' first characters
  words = words.map(word => word[0].toUpperCase() + word.slice(1));
  // return string with reversed words put in reverse order
  return words.reverse().join(" ");
}