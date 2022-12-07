/* We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)

Task

You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
*/
function isValid(formula){
  if ((formula.includes(1) && formula.includes(2))
  || (formula.includes(3) && formula.includes(4))
  || (!formula.includes(7) && !formula.includes(8))
  || (formula.includes(5) && !formula.includes(6))
  || (formula.includes(6) && !formula.includes(5))) return false
  return true
}