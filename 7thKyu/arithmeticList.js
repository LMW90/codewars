/* In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

    first the first term in the sequence
    c the constant that you are going to ADD ( since it is an arithmetic sequence...)
    l the number of terms that should be returned
*/
var seqlist = function(first,c,l){
  let sequence = [];
  for (let i = 0; i < l; i++){
    sequence.push(first + i * c);
  }
  return sequence;
}