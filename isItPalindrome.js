// return true if input string is a palindrome, false otherwise

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}