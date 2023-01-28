/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
function highestRank(arr){
  // count items
  let counts = arr.reduce((obj, item) => {
    if (!obj[item]) {obj[item] = 0};
    obj[item]++;
    return obj;
  }, {});
  // determine max count
  const maxCount = Math.max(...Object.values(counts))
  // make an array of key value pairs
  let entries = Object.entries(counts);
  // return maximum key among keys with maximum value
  return Math.max(...entries.filter(item => item[1] === maxCount).map(item => item[0]));
}