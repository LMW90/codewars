/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
var greet = function(name) {
  // insert capitalized first letter and lower case remaining letters and greet
  return `Hello ${name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()}!`
 };