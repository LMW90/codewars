/* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/
function formatDuration (seconds) {
  // handle zero input 
  if (seconds === 0) return 'now'
  // extract time units and update seconds
  let years = Math.floor(seconds / 365 / 24 / 3600)
  seconds -= years * 365 * 24 * 3600
  let days = Math.floor(seconds / 24 / 3600)
  seconds -= days * 24 * 3600
  let hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  let minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  // convert time units into human readable strings
  years = `${(years == 0) ? '' : (years == 1) ? '1 year' : years + ' years'}`  
  days = `${(days == 0) ? '' : (days == 1) ? '1 day' : days + ' days'}`  
  hours = `${(hours == 0) ? '' : (hours == 1) ? '1 hour' : hours + ' hours'}`
  minutes = `${(minutes == 0) ? '' : (minutes == 1) ? '1 minute' : minutes + ' minutes'}`
  seconds = `${(seconds == 0) ? '' : (seconds == 1) ? '1 second' : seconds + ' seconds'}`
  // make an array out of strings and filter out empty strings
  let arr = [years,days,hours,minutes,seconds].filter(item=> item)
  // handle 1-2 item arrays
  if (arr.length <= 2) return arr.join(' and ')
  // return string out of glued array
  else return arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1)
}