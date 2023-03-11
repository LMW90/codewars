/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
function rgb(r, g, b){
  // initialize value to store result
  let hex = '';
  // add to return string converted arguments
  for (let arg of arguments){
    // fix inputs out of range
    if (arg > 255) arg = 255;
    if (arg < 0) arg = 0;
    let tmp = arg.toString(16);
    // prefix single digit strings with "0"
    if (tmp.length === 1) hex += '0' + tmp;
    else hex += tmp;
  }
  // return the string
  return hex.toUpperCase();
}