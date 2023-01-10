/* Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
function towerBuilder(nFloors) {
  return Array.from({ length: nFloors},(row,index) => {
    return ' '.repeat(nFloors-1 - index) + '*'.repeat(2*index+1) + ' '.repeat(nFloors-1 - index);
  });
};