//Return the average of the given array rounded down to its nearest integer. The array will never be empty
function getAverage(marks){
  return Math.floor(marks.reduce((acc, val)=>acc+val, 0) / marks.length)
}