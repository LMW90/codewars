// find a single item not matching other in the input array

function stray(numbers) {
  return numbers.find(item=> numbers.lastIndexOf(item) === numbers.indexOf(item))
}