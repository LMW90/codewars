// given input string and character, return number of occurences of a letter within a string

function strCount(str, letter){  
  return str.split('').filter(item => item == letter).length
}