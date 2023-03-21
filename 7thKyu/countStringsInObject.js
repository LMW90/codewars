/* Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/
function strCount(obj){
  // initialize the counter
  let count = 0;
  // extract values into an array
  obj = Object.values(obj);
  for (let value of obj){
    // if string increment the counter
    if (typeof value == "string") count++;
    // call function recursively for non-nullish objects and add the result
    if (value && typeof value == "object") count += strCount(value);
  }
  // return the count
  return count;
}
