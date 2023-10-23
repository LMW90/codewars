/* Count how often sign changes in array.
result

number from 0 to ... . Empty array returns 0
example

const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/
function catchSignChange(arr) {
  // create variables to track current number sign and counter
  let sign = arr[0] < 0, counter = 0;
  // loop through array, change current sign if needed and increment counter in that case
  for (let item of arr) {
    if (item < 0 !== sign) {
      counter++;
      sign = !sign;
      }
  }
  return counter;
}