/* given a string of space-separated numbers, 
return a string containing space-separated maximum and minimum number within a string
*/

function highAndLow(numbers){
  numbers = numbers.split(' ').map( item => +item );
  let minimum = Math.min(...numbers);
  let maximum = Math.max(...numbers);
  return maximum + ' ' + minimum;
}