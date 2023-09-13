/* The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3

The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)
*/
function hammingWeight(x) {
  // store number of 1s
  let onesCount = 0;
  while (x > 0) {
    // deduct biggest power of two smaller than number and update 1s count
    x -= 2**Math.floor(Math.log2(x));
    onesCount++;
  }
  // return total powers of two count within the number
  return onesCount;
}