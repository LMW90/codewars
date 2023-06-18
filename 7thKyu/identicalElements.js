/* Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/
function duplicateElements(m, n) {
  // test for empty arrays
  if (!m.length || !n.length) return false;
  // convert one of arrays into set for O(C) look up
  m = new Set(m);
  // return if any element of other array is within the set
  return n.some(element => m.has(element));
}