// first character of a string is always a digit, write a fuction that returns it as a number
function getAge(inputString){
  return +inputString.slice(0,1); 
  // return parseInt(inputString)  // superior?
}