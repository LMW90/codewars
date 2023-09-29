/* Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

mainDiagonalProduct([[1,0],[0,1]]) => 1

mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45
*/
function mainDiagonalProduct(mat) {
  // initialize product as neutral multiplier
  let product = 1;
  // multiply diagonal matrix elements
  for (let i = 0; i < mat.length; i++) product *= mat[i][i];
  // return the product
  return product;
}