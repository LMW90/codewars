/* I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/
function mutateMyStrings(stringOne, stringTwo) {
  let res = [stringOne];
  for (let i = 0; i < stringTwo.length; i++) {
    if (stringOne[i] == stringTwo[i]) continue;
    res.push(stringTwo.slice(0,  i + 1) + stringOne.slice(i+1));
  }
  return res.join('\n') + '\n';
}