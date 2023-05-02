/* Definition

Extra perfect number is the number that first and last bits are set bits.
Task

Given a positive integer N , Return the extra perfect numbers in range from 1 to N.
*/
function extraPerfect(n){
  let extraPerfectNumbers = [];
  // every odd number is extra perfect number
  for (let i = 1; i <= n; i += 2){
    extraPerfectNumbers.push(i);
  }
  return extraPerfectNumbers;
}