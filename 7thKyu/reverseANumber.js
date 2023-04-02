/* Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1
*/
function reverseNumber(n) {
  // extract digits and reverse
  let reverseDigits = n.toString().split('').filter(digit => digit !== '-').reverse();
  // test for minus and return reversed number
  return (n >= 0)? +reverseDigits.join('') : +('-' + reverseDigits.join(''));
}