// return input number with digits rearranged in descending order

function descendingOrder(n){
  return +String(n)
    .split('')
    .sort((a,b)=>b-a)
    .join('');
}