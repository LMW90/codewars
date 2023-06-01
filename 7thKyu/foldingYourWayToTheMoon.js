/* You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.
*/
function foldTo(distance) {
  // handle invalid input
  if (distance < 0) return null;
  // variables to track result and break condition
  let [steps, thickness] = [0, .0001];
  // double thickness each step until input value reached
  while (thickness < distance) {
    steps++;
    thickness *= 2;
  }
  // return number of steps
  return steps;
}