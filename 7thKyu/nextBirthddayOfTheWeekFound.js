/* Can you find after how many years will a person's birthday fall on the same day of the week that he was born?

For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)
Note

Month is zero-indexed

nextBirthdayOfTheWeek(new Date(1990, 9, 16)) //11
nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5
*/
var nextBirthdayOfTheWeek = function (birthday) {
  // determine what day of the week we seek for
  let day = birthday.getDay();
  // extract date elements from birthday
  let [date, month, year] = [birthday.getDate(), birthday.getMonth(), birthday.getFullYear()];
  let howMany = 1;
  // create next birthday date object
  let current = new Date(year+1, month, date);
  // keep creating next birhdays until matching day of the week found
  while (current.getDay() !== day) {
    howMany++;
    current = new Date(current.getFullYear()+1, month, date);
  }
  // return the amount of years passed
  return howMany;
}