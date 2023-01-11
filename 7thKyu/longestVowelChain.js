/*The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/
function solve(s){
  // find all clusters of vowels, map array of those into their lengths and return the biggest length
  return Math.max(...s.match(/[aieou]+/gi).map(c => c.length));
};