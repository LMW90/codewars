/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.*/
function expandedForm(num) {
  // get magnitude
  let mag = num.toString().length - 1
  // define numbers array
  let numbers = []
  // append digits raised to their magnitude to the string
  let keepGoing = true // glorious control variable
  while(keepGoing){
    // extract digit from number
    let digit = Math.trunc(num / 10 ** mag) * 10 ** mag
    // updates
    numbers.push(digit)
    mag--
    num -= digit
    // guard for last digit
    if (mag === -1) keepGoing = false
  }
  // filter out zeroes and return combined numbers
  return numbers.filter(item=>item).join(' + ')
}