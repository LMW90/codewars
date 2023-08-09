/* You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'
*/
function countdown (millisecs) {
  // determine if it's countdown or countup
  const isNegative = (millisecs < 0) ? true : false;
  // calculate time units
  millisecs = Math.abs(millisecs);
  let hours = Math.floor(millisecs / 1000 / 3600).toString().padStart(2, '0');
  let minutes = Math.floor(millisecs % (1000 * 3600) / (1000 * 60)).toString().padStart(2, '0');
  let seconds = (millisecs % (1000 * 60) / 1000).toString().padStart(2, '0');
  // combine time units and return a string with proper positive/negaive sign
  return `${isNegative ? '-' : '+'}${hours}:${minutes}:${seconds}`;
}