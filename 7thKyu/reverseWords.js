/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {
  // reverse each block of non-whitespace characters with it's reversal
  return str.replace(/\S+/g, x => x.split('').reverse().join(''));
}