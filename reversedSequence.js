// Build a function that returns an array of integers from n to 1 where n>0

const reverseSeq = n => Array.from({length: n}, (v, k)=> n - k);