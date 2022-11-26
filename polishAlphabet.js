/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/
function correctPolishLetters (string) {
  // set up pairs of letters
  let pairs = [['ą','a'],['ć','c'], ['ę','e'],['ł','l'],['ń','n'],['ó','o'],['ś','s'],['ź','z'],['ż','z']]
  // copy string
  let result = string
  // for each pair substitute letters in pair
  pairs.forEach(pair => result = result.split(pair[0]).join(pair[1]))
  // return the result
  return result
}