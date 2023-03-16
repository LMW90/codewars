/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str){
  // split to words, replace each word with result of following instructions and join back into a string
  return str.split(' ').map(word => {
    // test for special characters and ingnore if present
    if (word.match(/[^a-z]/i)) return word;
    // make pig latin word
    return word.slice(1) + word[0] + 'ay';
    }).join(' ');
}