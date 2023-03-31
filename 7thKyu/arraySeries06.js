/* Task

Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
Notes:

    List size is at least 3.

    All numbers will be positive.

    Numbers could occur more than once , (Duplications may exist).

    Threshold K will always be reachable.
*/
function minimumSteps(numbers, value){
  // sort the list
  numbers.sort((a,b)=>a-b);
  // track the sum
  let sum = 0;
  // add consecutive items, once sum reached value, return step count
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    if (sum >= value) return i;
  }
}