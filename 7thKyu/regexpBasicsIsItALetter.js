/* Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/
String.prototype.isLetter = function() {
  // test if string starts and ends with the same letter(and match)
  return /^[a-z]$/i.test(this);
}