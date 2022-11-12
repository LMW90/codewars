/* given coefficient and exponent return their integral as a string */
function integrate(coefficient, exponent) {
  const exp1 = exponent + 1
  return `${coefficient/exp1}x^${exp1}`
}