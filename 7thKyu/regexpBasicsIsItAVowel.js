/* Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/
String.prototype.vowel = function() {
  // test if this is single character and a vowel
  return this.length === 1 && /[aeiou]/i.test(this);
};