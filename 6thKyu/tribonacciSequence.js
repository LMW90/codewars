/* Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/
function tribonacci(signature,n){
  // handle n == 0
  if (!n) return [];
  // handle n <= 3
  if (n < 4) return signature.slice(0, n);
  // build tribonacci sequence
  let result = signature;
  for (let i = 0; i < n - 3; i++){
    result.push(result[i] + result[i+1] + result[i+2]);
  };
  return result;
}