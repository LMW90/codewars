/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
*/
function validParentheses(parens) {
  let sum = 0
  for (let i = 0; i < parens.length; i++){
    if (parens[i] === '(') sum += 1
    if (parens[i] === ')') sum -= 1
    if (sum < 0) return false
  }
  return n === 0;
}