/* Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"

The birthday is expected to be in the past.
*/
function ageInDays(year, month, day) {
  // generate date objects for today and input
  let today = new Date();
  let birthday = new Date(year, month-1, day);
  // calculate the difference and convert into days
  let days = Math.floor((today - birthday) / 1000 / 3600 / 24);
  return `You are ${days} days old`;
}