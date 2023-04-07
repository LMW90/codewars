/* Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.
Example 1

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

Example 2

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/
function sortArray(a1, a2) {
  // sort by a1 index of first character of a2's item
  return a2.sort((a,b) => {
    return a1.findIndex(item => item[0] === a[0]) - a1.findIndex(item => item[0] === b[0]);
  });
}