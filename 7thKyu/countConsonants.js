/* Complete the function that takes a string of English-language text and returns the number of consonants in the string.
*/
function consonantCount(str){
  // match all consonants, if none - empty array and return it's length
  return (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
}