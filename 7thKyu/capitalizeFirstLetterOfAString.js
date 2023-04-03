/* Capitalize First Letter of a String

Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:
Input 	Output
string 	String
hello World 	Hello World
i love codewars 	I love codewars
This sentence is already capitalized 	This sentence is already capitalized
0123the first character of this sentence is not a letter 	0123the first character of this sentence is not a letter

JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
*/
String.prototype.capitalize = function(){
  // read the code of first character
  let firstCharCode = this.charCodeAt(0);
  // if lowercase letter return capitalized string
  if (firstCharCode > 96 && firstCharCode < 123) return String.fromCharCode(firstCharCode-32) + this.slice(1);
  // else return the original value of the string
  return this.valueOf();
}