/* Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/
function computerToPhone(numbers){
  const pairs = { "1": 7, "2": 8, "3": 9, "7": 1, "8": 2, "9": 3 };
  // replace the number with respective number from pair
  return numbers.replace(/[123789]/g, num => pairs[num]);
}