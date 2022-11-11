/*  Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/
function replace(s){
  // replace all vowels, case-insensitive
  return s.replace(/[aeiou]/ig, '!')
}