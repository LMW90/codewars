// given an array of integers return an average of it's value

function findAverage(array) {
  if (!array.length) return 0;
  return array.reduce((acc, item) => acc + item, 0) / array.length;
}