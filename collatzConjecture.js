/* Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.
*/
var hotpo = function(n, count=0){
  // if done ore input zero return current count
  if (n === 0 || n === 1) return count
  // if not done increment count and call function for modified number and incremented count
  count++
  return (n%2 === 0) ? hotpo(n/2, count) : hotpo(3*n+1, count)
}