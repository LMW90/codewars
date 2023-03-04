/* Your Task

Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
Examples

    booleans = [True, True, False], operator = "AND"

    True AND True -> True
    True AND False -> False
    return False

    booleans = [True, True, False], operator = "OR"

    True OR True -> True
    True OR False -> True
    return True

    booleans = [True, True, False], operator = "XOR"

    True XOR True -> False
    False XOR False -> False
    return False

Input

    an array of Boolean values (1 <= array_length <= 50)
    a string specifying a logical operator: "AND", "OR", "XOR"

Output

A Boolean value (True or False).
*/
function logicalCalc(array, op){
  // store first logical value and start looping from second item
  let tmp = array[0];
  let n = 1;
  while (n < array.length){
    // assign logical values of operations to tmp
    if (op === "AND") {
      tmp = tmp && array[n];
    } else if (op === "OR") {
      tmp = tmp || array[n];
    } else if (op === "XOR") {
      // very own logical XOR
      tmp = ((tmp && !array[n]) || !tmp && array[n]) ? true : false;
    }
    n++;
  }
  // return final assigned value
  return tmp;
}