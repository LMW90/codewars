// given the number, return it's number of divisors

function getDivisorsCnt(n){
  let numOfDivisors = 0  
  for (let i = 1; i <= n; i++){
      if (n % i === 0) numOfDivisors++
    }
  return numOfDivisors
}