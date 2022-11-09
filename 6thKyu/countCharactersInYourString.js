/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count (string) {  
  // split string into an array
   return string.split('')
  // loop through array, if char not yet in return obj, add with count of 1, else increment
    .reduce((obj, char) => {
     if (!obj[char]) obj[char] = 1
     else obj[char]++
     return obj
   }, {});
}