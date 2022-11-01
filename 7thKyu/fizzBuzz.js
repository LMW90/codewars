/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
function fizzbuzz(n)
{
  // create an n elements array
  let arr = Array(n).fill(0)
  // assign values to an array
  arr.forEach((_,index)=>{
    if ((index + 1) % 5 === 0){
      if ((index + 1) % 3 === 0) arr[index] = "FizzBuzz"
      else arr[index] = "Buzz"
    } else if ((index + 1) % 3 === 0) {
      arr[index] = "Fizz"
    } else arr[index] = index + 1
  })
  // return an array
  return arr
}
