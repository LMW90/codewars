// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  return Array.from({length: n}, (v, k)=> k + 1)
}