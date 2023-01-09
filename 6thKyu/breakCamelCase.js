/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/
// complete the function
function solution(string) {
  // replace uppercase letters directly preceded by charaters with space plus found uppercase letter
  return string.replace(/(?<=\w)[A-Z]/g, ' $&');
};