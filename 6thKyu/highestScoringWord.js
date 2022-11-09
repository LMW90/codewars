/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
  // split input string into words
  let arr = x.split(' ')
  // map scores to a copy of split input string
  let scores = arr.slice().map(word => {
    return word.split('').reduce((score,char)=> score += char.charCodeAt(0) - 96, 0)
  })
  // return word under index of maximum score
  return arr[scores.indexOf(Math.max(...scores))]
}