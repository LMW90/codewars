/* Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
"16:42:59,000"
*/
function convert(time) {
  // extract each time unit individually and pad with leading zeros
  let hours = time.getHours().toString().padStart(2, '0');
  let minutes = time.getMinutes().toString().padStart(2, '0');
  let seconds = time.getSeconds().toString().padStart(2, '0');  
  let milliseconds = time.getMilliseconds().toString().padStart(3, '0');
  // return the combined string
  return `${hours}:${minutes}:${seconds},${milliseconds}`;
}