// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort((a,b)=>b-a).slice(0,2).sort((a,b)=>a-b)
}