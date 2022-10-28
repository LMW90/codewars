/* Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
Examples:

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/
function numberOfPairs(gloves)
{
  // create an object with "color": count key: value pairs
  let colorCount = gloves.reduce((colors,glove)=>{
    // create a new entry from array values not present yet within an object
    if (!colors[glove]){
      colors[glove] = 1
    } else { // increment count for colors already being object properties
      colors[glove]++
    }
    return colors
  }, {})
  // return a reduced array created out of color count object values divided by two
  return Array.from(Object.values(colorCount), (v,k) => Math.floor(v/2))
    .reduce((total,item) => total += item, 0)
}