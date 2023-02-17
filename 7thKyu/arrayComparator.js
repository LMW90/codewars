/* You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.
*/
function matchArrays(v,r){
  // store second array's values in an object
  let values = {}
  for (let i = 0; i < r.length; i++){
    values[r[i]] = null;
  }
  // increment count when current value is a property of stored values
  return v.reduce((count, current) => current in values ? count + 1 : count, 0)
}