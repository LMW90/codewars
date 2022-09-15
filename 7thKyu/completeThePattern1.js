/* write a function that given n returns following pattern:
1
22
333
....
.....
nnnnnn
*/

function pattern(n){
  let output="";
   for (let j = 1; j <= n; j++){
      for (let i = 0; i < j; i++){
        output += j;
      }
     if (j !== n) output += '\n';
   }
  return output;
 }