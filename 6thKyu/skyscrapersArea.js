/* We want to find the area of a set of buildings stacked close to each other.

A matrix (an array of arrays) gives us a description of the building from above, where each number represents the height expressed in cubes 1*1*1, the cubes are stacked adjacent to each other.

For example:

matrix = [[2,1],[2,0]] 

In position (0,0), there are 2 cubes stacked on each other
In position (0,1), there is only 1 cube
In position (1,0), there are 2 cubes stacked on each other
In position (1,1), there are 0 cubes stacked on each other.

So, the total covered area is 20.

The matrix will be of at least size 1*1 and square.

Note: The floor of the building counts as area as well.
*/
function surface_area(matrix) {
  // track the result
  let exposedSides = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // read current height
      let currentHeight = matrix[i][j];
      // if 0, skip
      if (currentHeight === 0) continue;
      // calculate area of the block
      let currentSides = currentHeight * 4 + 2;
      // deduct area covered by adjacent blocks (if present)
      currentSides -= Math.min(currentHeight, matrix[i-1]?.[j] ?? 0);
      currentSides -= Math.min(currentHeight, matrix[i+1]?.[j] ?? 0);
      currentSides -= Math.min(currentHeight, matrix[i]?.[j-1] ?? 0);
      currentSides -= Math.min(currentHeight, matrix[i]?.[j+1] ?? 0);
      // increment the score
      exposedSides += currentSides;
    }
  }
  return exposedSides;
}