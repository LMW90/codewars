/* Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
*/
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, item) => acc + item, 0); 
  // and to think people complain on funky js type conversions
}