/* Behaviour

You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/
function padIt(str,n){
  let pad = str
  let keepGoing = true
  while (keepGoing){
    pad = (n%2 === 1) ?  '*' + pad : pad + '*'
    n--
    if (!n) keepGoing = false
  }
  return pad
}