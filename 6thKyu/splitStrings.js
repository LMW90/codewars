/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str){
  // handle zero and one character strings
  if (!str) return []
  if (str.length === 1) return str + '_'
  // create array of pairs of characters
  let result = str.match(/.{2}/g)
  // of string length is odd, add last character with a dash
  if (str.length % 2 === 1) {
    let suffix = str.match(/.$/)[0]
    result.push(`${suffix}_`)
  }
  // return the array
  return result
}