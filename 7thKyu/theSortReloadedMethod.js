/* Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.
Task

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or '
*/
Array.prototype.sortReloaded = function(dir="asc"){
  // create a copy to protect original array
  const tmp = [...this];
  // test for invalid input
  if (!["asc", "desc"].includes(dir)) return false;
  // sort in ascending/descending order and return
  return (dir == "asc") ? tmp.sort((a,b)=>a-b) : tmp.sort((a,b)=>b-a);
}