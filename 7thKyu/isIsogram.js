/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/
function isIsogram(str){
  // handle empty strings
  if (str.length == 0) return true
  // make string case-insensitive
  str = str.toLowerCase()
  // check if for each character first index equals last index
  for (let i = 0; i < str.length; i++){
    if (str.lastIndexOf(str[i]) != i) return false
  }
  return true
}