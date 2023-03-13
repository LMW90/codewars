/* Create an identity matrix of the specified size( >= 0).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   
*/
function getMatrix(number) {
  // create a number-length array callback populates array with number-length subarays
  return Array.from({ length: number }, (_,idx) => {
    let sub = [];
    for (let i = 0; i < number; i++){
      // if row matches column assign 1 else assign 0
      if (i === idx) sub.push(1);
      else sub.push(0);
    }
    return sub;
  })
}