// reverse input array without using reverse() method

reverse = function(array) {
  let result = []
  array.forEach(element=>{
    result.unshift(element)
  })
  return result
}