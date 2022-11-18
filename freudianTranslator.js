/* In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. 
Note that an empty string, or no arguments, should return an empty string.
*/
function toFreud(string) {
  return (string) 
    // created a word-count-long-array filled with 'sex' (sic) and join it into a string
    ? Array(string.split(' ').length).fill('sex').join(' ')
    : ''
  }