/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
*/
function mxdiflg(a1, a2) {
  // handle empty arrays
  if (!a1.length || !a2.length) return -1;
  // map arrays with string lengths
  [a1,a2] = [a1.map(item => item.length), a2.map(item => item.length)];
  // determine min-max in each array
  let [min1, min2, max1, max2] = [Math.min(...a1),Math.min(...a2),Math.max(...a1), Math.max(...a2)]
  // return biggest difference
  return Math.max(Math.abs(max1-min2),Math.abs(max2-min1));
}