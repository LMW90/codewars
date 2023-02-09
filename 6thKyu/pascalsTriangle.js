/* In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
(nk)=n!k!(n−k)!\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}(kn​)=k!(n−k)!n!​

where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.
Task

Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
Example:

n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

Note

Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.
*/
function pascalsTriangle(n) {
  // initialize array for result
  let triangle = [];
  for (let i = 0; i < n; i++){
    // initialize row
    let row = [1];
    // build row if not first one
    if (i > 0){
      for (let j = 1; j < i + 1; j++){
       row.push(factorial(i)/factorial(j) / factorial(i-j));
      } 
    }
    // add row to triangle
    triangle = triangle.concat(row);
  }
  return triangle;
}
// factorial helper function
function factorial(n){
  if (n == 0) return 1;
  return n * factorial(n-1);
}
// non-recurrent version
function pascalsTriangle(n) {
  // initialize array for result
  let triangle = [];
  for (let i = 0; i < n; i++){
    // initialize row
    let row = [1];
    // build row if not first or second one
    if (i > 0){
      for (let j = 1; j < i; j++){
        row.push(triangle[i-1][j-1] + triangle[i-1][j]);
      }
      row.push(1);
    }
    // add row to triangle
    triangle.push(row);
  }
  return triangle.flat();
}