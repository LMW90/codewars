// check if a given integral number is a sqare number (integer that is a sqare of integer)

const isSquare = function(n){
  return n === Math.trunc(Math.sqrt(n))**2;
}