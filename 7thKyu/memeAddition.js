/* For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
Examples
 1  6
 1  8 
+____
 2 14

 2  6
 3  9
+____
 5 15

 1  2 2
    8 1
+______ 
 1 10 3
*/
function add(num1, num2) {
  // convert input to strings
  [num1, num2] = [num1.toString(), num2.toString()]
  // track the result
  let sum = '';
  // loop throught strings, sum last digits and prepend the sum to result string
    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
      sum = +(num1.charAt(num1.length - 1 - i) ?? 0) + +(num2.charAt(num2.length - 1 - i) ?? 0) + sum;
    }
  // return result converted to number
  return +sum;
}