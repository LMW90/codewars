/* Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/
function unluckyDays(year) {
  let blackFridaysCount = 0;
  // for each month of input year create a date object for 13th day and test for Fiday
  for (let i = 0; i < 12; i++) {
    let currentDate = new Date(year, i, 13);
    if (currentDate.getDay() === 5) blackFridaysCount++;
  }
  // return the amount of Fridays found
  return blackFridaysCount;
}