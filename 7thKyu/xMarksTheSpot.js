/* ask:

Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
Examples

Input: []

Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]

Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]

Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]
*/
const xMarksTheSpot = (input) => {
  // find row
  let x = input.findIndex(row => row.includes('x'));
  // test for other 'x's
  let temp = input.findLastIndex(row => row.includes('x'))
  if (x === -1 || temp !== x) return [];
  // find column
  let y = input[x].indexOf('x');
  // test for other 'x's
  temp = input[x].lastIndexOf('x');
  if (y !== temp) return [];
  // return coords
  return [x, y];
}