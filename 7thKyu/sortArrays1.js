// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

sortme = function( names ){
  // this is correct
  //return names.sort((a,b)=>a.localeCompare(b))
  // this is not
  return names.sort();
}