/* A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

yearDays(2000) returns "2000 has 366 days"

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
*/
function yearDays(year){
  let days
  if (year % 4 === 0){
    if (year % 100 === 0 && year % 400 !== 0){
      days = 365
    } else {
      days = 366
    }
  } else {
    days = 365
  }
  return `${year} has ${days} days`
}