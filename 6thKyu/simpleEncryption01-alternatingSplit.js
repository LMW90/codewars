/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
function encrypt(text, n) {
  if (!text || n <= 0) return text;
  let encryptedText = text.split('');
  while (n > 0){
    encryptedText = encryptedText
      .filter((_,idx)=> idx%2)
      .concat(encryptedText.filter((_,idx)=> idx%2 === 0));
    n--;
  }
  return encryptedText.join('');
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  let decryptedText = encryptedText.split('');
  while (n > 0){
    let tmp = [];
    let odd = decryptedText.slice(0, Math.floor(encryptedText.length/2));
    let even = decryptedText.slice(Math.floor(encryptedText.length/2));
    for (let i = 0; i < Math.max(odd.length, even.length); i++){
      tmp.push(even[i]);
      tmp.push(odd[i]);
    }
    decryptedText = tmp;
    n--;
  }
  return decryptedText.join('');
}