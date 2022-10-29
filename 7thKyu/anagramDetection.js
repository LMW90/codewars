// write the function isAnagram
var isAnagram = function(test, original) {
  // reject different length pairs imediately
  if (test.length != original.length) return false
  // sanitize cases
  test = test.toLowerCase()
  original = original.toLowerCase()
  // check if sorted strings are equal
  let areEqual = test.split('').sort().every((item,index) => item == original.split('').sort()[index])
  return areEqual
};