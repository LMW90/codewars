// given length of a quarter of a circle return radius-sided square's area

function squareArea(A){
  return +((2 * A / Math.PI) ** 2).toFixed(2)
}