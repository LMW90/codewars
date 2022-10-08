// given the dimensions of chocolate bar return the number of breaks needed to split it in single pieces

function breakChocolate(n,m) {
  return Math.max(n * m - 1, 0);
}