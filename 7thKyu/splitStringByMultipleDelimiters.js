/* Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

Example:

multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']

List of delimiters is optional and can be empty, so take that into account.

Important note: Result cannot contain empty string.
*/
function multipleSplit(string, delimiters=[]){
  // join delimiters with escaped "\" into a string representation of characters group
  const delimitersString = `[${delimiters.join("\\")}]`
  // convert the string into regular expression
  const delimitersRegExp = new RegExp(delimitersString);
  // split with regular expression as separator, filter out empty strings and return
  return string.split(delimitersRegExp).filter(word => word !== '');
}