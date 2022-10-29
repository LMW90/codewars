/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/
function capitalize(s){
  // setup variables to return
  let a = '', b = ''
  // loop through all string characters
  for (let i = 0; i < s.length; i++){
    // for each other character
    if (i % 2 == 0) {
      // append upper case character to first string and lowercase character to other one
      a += s[i].toUpperCase()
      b += s[i]
    } else {
      a += s[i]
      b += s[i].toUpperCase()
    }
  }
  // return completed strings as an array
  return [a,b]
}