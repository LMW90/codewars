// given a string, convert it's case into one that is more numerous already
function solve(s){
  // count uppercase and lowecase characters
  // setup variables for the count
  let upper = 0, lower = 0
  // loop through a string and make a count
  for (let i = 0; i < s.length ; i++){
    if (s[i].toLowerCase() === s[i]) { lower++ }
    else { upper++ }
  }
  // return a string in the more numerous case
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase()
}