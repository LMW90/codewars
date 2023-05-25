/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/
function alternateCase(s) {
  // track the return value
  let alternatingString = "";
  // test for lower case and append to result characters coverted accordingly
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === s[i]) alternatingString += s[i].toUpperCase();
    else alternatingString += s[i].toLowerCase();
  }
  // return the score
  return alternatingString;
}