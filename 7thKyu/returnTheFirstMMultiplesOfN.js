/* Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)

should return

[5.0, 10.0, 15.0]
*/
function multiples(m, n) {
  // build an m length array of first n multiples of n (excluding 0)
  return Array.from({ length: m }, (_,key) => n * (key+1));
}