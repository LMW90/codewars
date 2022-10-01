// create a function that returns all divisors of an input integer, excluding 1 and itself, if integer is prime return "<integer> is prime"

function divisors(integer) {
  let divs = []
  for (let i = 2; i < integer; i++){
    if (!(integer % i)) {
      divs.push(i)
    }
  }
  return (divs.length) 
    ? divs
    : `${integer} is prime`
};