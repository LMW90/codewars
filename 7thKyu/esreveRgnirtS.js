/* Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"

The reverse function should NOT modify the original string.
*/
String.prototype.reverse = function(){
  let reversed = '';
  // assign to variable characters in reversed sequence and return
  for (let i = this.length - 1; i >= 0; i--) reversed += this[i];
  return reversed;
}