/* Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/
function mygcdRec(x,y){
  // recursive Euclidean algorithm
  if (y === 0) return x;
  else return mygcdRec(y, x % y);
}
function mygcd(x,y){
  // non-recursive Euclidean algorithm
  while (x !== y) {
    if (x > y) x = x - y;
    else y = y - x;
  }
  return x;
}