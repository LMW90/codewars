// given an array remove every other element starting from second one 

function removeEveryOther(arr){
  return arr.filter((element, index) => index % 2 == 0)
}