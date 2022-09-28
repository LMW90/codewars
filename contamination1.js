/* f the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!
else return text replaced with character
*/

function contamination(text, char){
  if (text.length === 0 || char.length === 0) return ''
  return char.repeat(text.length)
}