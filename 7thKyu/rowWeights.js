/* Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

    Array size is at least 1.
    All numbers will be positive.
*/
function rowWeights(array){
  // set up two-item accumulator to store rows
  // pass a reduce function that adds array items to accumulator items in alternating manner
  return array.reduce((acc,item,index)=> {
    // zero and even indices
    if (index%2 == 0) acc[0] += item
    // odd indices
    else acc[1] += item
    return acc
  }, [0,0])
}