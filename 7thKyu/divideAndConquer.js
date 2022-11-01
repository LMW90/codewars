/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/
function divCon(x){
  // sum up integers and strings seperately
  let sums = x.reduce((acc,item)=>{
    if (typeof item !== "string") acc[0] += item
    else acc[1] += +item
    return acc
  }, [0,0])
  // return the difference of sums
  return sums[0] - sums[1]
}