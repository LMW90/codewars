/* When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/
function longestWord(stringOfWords) {
  let longest = '';
  for (let word of stringOfWords.split(' ')) {
    if (word.length >= longest.length) longest = word;
  }
  return longest;
}