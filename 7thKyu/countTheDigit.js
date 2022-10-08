/* take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2. */

function nbDig(n, d) {
  let powers = Array.from({length: n + 1}, (element, index) => index ** 2).join(', ')
  return powers.length - powers.split(d).join('').length;
}