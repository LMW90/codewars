// Your task is to write function factorial.
function factorial(n){
  // handle the base case (stop condition)
  if (n === 0) return 1
  // recursive case
  return n * factorial(n-1)
}