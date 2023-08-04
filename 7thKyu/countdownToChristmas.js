/* Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.

Watch out for leap years!
*/
function daysUntilChristmas(days) {
  // determine if there was Christmas already this year and create a date object for next Christmas
  let christmasDate = (days.getMonth() === 11 && days.getDate() > 25)
    ? new Date(days.getFullYear()+1, 11, 25)
    : new Date(days.getFullYear(), 11, 25);
  // calculate difference between dates in days and return
  return (christmasDate-days)/1000/3600/24;
}