/* While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
*/
function checkRoot(string){
  // test for wrong input
  if (string.match(/[^\d,0]/)) return 'incorrect input';
  // extract numbers
  let nums = string.split(',').sort((a,b)=>a-b);
  // test for correct amount of numbers
  if (nums.length != 4) return 'incorrect input';
  // test for non-consecutive numbers
  for (let i = 1; i < nums.length; i++){
    if (nums[i] - 1 != nums[i-1]){
      return 'not consecutive';
    }
  }
  // create the product
  const perfect = nums.reduce((acc,num) => acc*num, 1) + 1;
  return `${perfect}, ${perfect**.5}`;
}