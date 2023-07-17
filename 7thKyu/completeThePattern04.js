/* Task:

You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
Examples:

pattern(4):

1234
234
34
4

pattern(6):

123456
23456
3456
456
56
6

Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/
function pattern(n) {
  // handle invalid input
  if (n <= 0) return ''; 
  // create array to store lines
  let pattern = [];
  // generate first line
  let line = Array.from({ length: n }, (_, i) => i+1).join('');
  let counter = 0;
  // generate further lines
  while (true) {
    let temp = line.slice(counter);
    if (counter >= 9) counter++;
    counter++;
    pattern.push(temp);
    if (+temp == n) break;
  }
  // join lines and return
  return pattern.join('\n');
}