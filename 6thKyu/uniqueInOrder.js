// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  let output = []
  Array.from(iterable).forEach((element, index, array) => {
    if (element != array[index-1]){
      output.push(element)
    }
  })
  return output
}