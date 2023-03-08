/* Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/
function dashatize(num) {
  // handle non-int input
  if (!Number.isInteger(num)) return "NaN";
  // clean up prefix "-"
  num = Math.abs(num).toString();
  // put '-' in front of odd preceded by digit, put '-' after odd followed by digit
  num = num.replace(/(?<=\d)[13579]/g, "-$&").replace(/[13579](?=\d)/g, "$&-");
  return num;
}