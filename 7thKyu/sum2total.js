/* Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\     
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /


if total([1,2,3]) => 8 then

first+second => 3 \
                   then 3+5 => 8
second+third => 5 /


Examples

total([-1,-1,-1]) => -4
total([1,2,3,4])  => 20

Note: each array/list will have at least an element and all elements will be valid numbers.
*/
function total(arr) {
  // until array has one element
  while (arr.length > 1){
    // repeatedly build new array out of merged elements
    arr = arr.reduce((acc, item, index) => {
      if (index < arr.length -1) acc.push(item + arr[index+1]);
      return acc;
    }, [])
  }
  // return final value remaining
  return arr[0];
}