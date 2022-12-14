// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
function nearestSq(n){
  for (let i = 0; n-i > 0; i++){
    if (Math.sqrt(n+i) % 1 == 0) return n+i
    if (Math.sqrt(n-i) % 1 == 0) return n-i
  }
}