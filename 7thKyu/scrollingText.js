/* Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
Example

scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

Good luck!
*/
function scrollingText(text){
  // uppercase the input
  text = text.toUpperCase();
  // create variable to store rotations
  const rotations = [];
  for (let i = 0; i < text.length; i++){
    // build a rotation
    let rotation = text.slice(i, text.length) + text.slice(0, i);
    rotations.push(rotation);
  }
  return rotations;
}