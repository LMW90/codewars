/* Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/
function isToday(date) {
  // check if DD-MM-YYYY strings are equal for today and date
  return date.toDateString() === new Date().toDateString()
}