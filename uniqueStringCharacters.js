/* n this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!
*/
function solve(a,b) {
  // find non-shared characters in a
  let notCommon = a.split("").filter(char => !b.includes(char));
  // find and append non-shared characters in b
  notCommon.push(...b.split("").filter(char => !a.includes(char)));
  // combine into string and return
  return notCommon.join("");
};