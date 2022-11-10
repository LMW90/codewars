// Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
  // sum elements of array and divide by it's length
  return nums.reduce( (sum,item) => sum += item, 0 ) / nums.length
}