// count 'O's and 'X's in a string and return true if it's equal false if it's not
function XO(str) {
  let xCount = str.split('')
  .filter(item => item.toLowerCase() === 'x')
  .length;
  let oCount = str.split('')
  .filter(item => item.toLowerCase() === 'o')
  .length;
  return xCount === oCount;
}