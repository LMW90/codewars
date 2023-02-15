/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

Good luck!
*/
function solve(s){
  // just count the characters really
  return [...s].reduce((list, char) => {
    if (char.match(/[A-Z]/)){
      list[0]++;
    } else if (char.match(/[a-z]/)) {
      list[1]++;
    } else if (char.match(/\d/)) {
      list[2]++
    } else {
      list[3]++
    }
    return list;
  }, [0,0,0,0]);
}