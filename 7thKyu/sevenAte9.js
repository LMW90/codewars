/* Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/
function sevenAte9(str) {
  // replace with empty string all 9s preceded by 7 and followed by 7
  return str.replace(/(?<=7)9(?=7)/g, '');
}