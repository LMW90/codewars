// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
function numberToPower(number, power){
  // return power of 0
  if (power === 0) return 1
  // initialize result and steering variable
  let keepGoing = true
  let result = 1
  // calculate the result
  while (keepGoing){
    result *= number
    if (power === 1) keepGoing = false
    power--
  }
  // return the result
  return result
}