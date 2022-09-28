// check if input array consists of pythagorean triple
function isPythagoreanTriple(integers) {
  return 2 * Math.max(...integers)**2 === integers.reduce((acc, item)=> acc + item**2, 0)
}