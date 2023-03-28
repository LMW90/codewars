/* Enable arithmetic operations on arrays, where the value of an array is given by the sum of its elements. Examples:

[1,2,3] + 4 = 10
[1,1,1] - 3 = 0
['a','b'] + 'c' = 'abc'

PS: Due to intrinsic uncertainty of empty arrays, in this kata an empty array is treated as 0.
*/
Array.prototype.valueOf = function(){
  let value;
  // simply reduce this, can't have starting sum
  if (this.length) value = this.reduce((sum,item)=> sum += item);
  // for empty array need to make 0 an initial valeu
  else value = this.reduce((sum,item)=> sum += item, 0);
  return value;
}