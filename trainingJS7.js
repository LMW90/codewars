// return n * value depending on n value
function saleHotdogs(n){
  return (n < 5) 
    ?n*100
    :(n<10)
      ? n*95
      : n*90
}