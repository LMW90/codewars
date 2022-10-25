/* You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

Words in your solution should be left-aligned.
*/
function mirror(text){
  let words = text.split(' ')
  let maxLength = Math.max(...words.map(item=>item.length))
  words = words.map(word=>`* ${word.split('').reverse().join('').padEnd(maxLength)} *`)
  words.push('*'.repeat(maxLength+4))
  words.unshift('*'.repeat(maxLength+4))
  return words.join('\n')
}