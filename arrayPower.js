/* given array of integers and integer return integer-index element raised to power of integer
if n is bigger than index of last element return -1
*/

function index(array, n){
  if (array.length <= n) return -1;
  return array[n]**n;
}