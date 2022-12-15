/* Theopposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.
Examples (input -> output)

"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false
*/
function isOpposite(s1,s2){
    if (s1.length === 0 || s1.length !== s2.length) return false
    for (let i = 0; i < s1.length; i++){
      if (s1[i].toLowerCase() == s1[i]){
        if (s2[i].toLowerCase() == s2[i]) return false 
      } else {
        if (s2[i].toUpperCase() == s2[i]) return false
      }
    }
    return true
  }