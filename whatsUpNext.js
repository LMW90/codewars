/* Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/
function nextItem(xs, item) {
  try {
    let index = xs.indexOf(item)
    return (index == -1) ? undefined : xs[index+1]
    }
  // takes over when generator passed as xs
  catch {
    for (let i = 0; i < item; ++i){
      // each call increments value
      if (xs.next().value === item) return xs.next().value
    }
  }
}