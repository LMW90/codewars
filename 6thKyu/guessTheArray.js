/* In this kata, you should determine the values in an unknown array of numbers. You'll be given a function f, which you can call like this:

f a b -- returns an Integral

where a and b are indexes of two different elements in the unknown array, 1 or 2 indexes apart. f will return the sum of those two elements.

The absolute difference between a and b must not be 0 nor greater than 2 (that is: the chosen indexes must be exactly 1 or 2 apart).

Your goal is to figure out the correct array.

The whole procedure is:

    You are given f and the length of the array n.
    Ask f for any element sums you want.
    Create and return the correct array according to the answers.

The array will always have at least 3 elements.
*/
function guess(fn, n) {
  // solve three equations three unknowns for first three items for first array item
  let firstItem = .5 * (fn(0,1) + fn(0,2) - fn(1,2));
  let hiddenArray = [firstItem];
  // calculate all subsequent items by deducting former item from sum of two subsequent items
  for (let i = 1; i < n; i++) {
    hiddenArray.push(fn(i-1, i) - hiddenArray[i-1]);
  }
  return hiddenArray;
}