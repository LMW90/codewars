//given a string of words return the length of the shortest one
function findShort(s){
  // split string into array => map words array into words length array =>
  // enter destructuringly array as arguments of Math min
  return Math.min(...s.split(' ').map(item => item.length));
}