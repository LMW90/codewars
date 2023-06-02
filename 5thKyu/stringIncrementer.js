/* Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
*/
function incrementString(str) {
  // handle base case
  if (!str.match(/\d+$/)) return str + 1;
  // find trailing number, replace with increment and pad lost zeros if required
  return str.replace(/\d+$/, num => String(+num + 1).padStart(num.length, "0"));
}