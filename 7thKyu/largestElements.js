/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/
function largest(n,xs){
  // sort array in ascending order
  xs.sort((a,b)=>a-b);
  // return last n elements or empty array
  return n ? xs.slice(-n) : [];
}