/* Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, the following call:

getRectangleString(3, 3);

Should return the following string:

***
* *
***

End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.
*/
function getRectangleString(width, height) {
  // point case
  if (width === 1 && height === 1) return '*\r\n';
  // top side
  const lines = ['*'.repeat(width)];
  // left/right sides
  for (let i = height - 2; i > 0; i--) {
    lines.push('*' + ' '.repeat(width-2) + '*');
  }
  // bottom side
  lines.push('*'.repeat(width) + '\r\n');
  return lines.join('\r\n');
}
