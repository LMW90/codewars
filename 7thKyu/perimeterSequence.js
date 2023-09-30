/* The first three stages of a sequence are shown.

               _
       _      | |_
 _    | |_    |   |_
|_|   |_ _|   |_ _ _|

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/
function perimeterSequence(a,n) {
  return 4*n*a;
}