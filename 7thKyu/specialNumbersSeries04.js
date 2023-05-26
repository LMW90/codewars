/* Task

Given a number, Find if it is Jumping or not.
Notes

    Number passed is always Positive .

    Return the result as String .

    The difference between ‘9’ and ‘0’ is not considered as 1 .

    All single digit numbers are considered as Jumping numbers.

Input >> Output Examples

jumpingNumber(9) ==> return "Jumping!!"

Explanation:

    It's single-digit number

jumpingNumber(79) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(89098) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(32) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1
*/
function jumpingNumber(n){
  // handle single/double digit inputs
  if (Math.abs(n) < 10) return 'Jumping!!';
  n = n.toString();
  if (n.length == 2) return (Math.abs(n.charAt(0) - n.charAt(1)) == 1) ? 'Jumping!!' : 'Not!!';
  // if for any digit difference with adjacents not equals 2 return "not"
  for (let i = 1; i < n.length -1; i++) {
    if (Math.abs(n.charAt(i)-n.charAt(i-1)) + Math.abs(n.charAt(i) - n.charAt(i+1)) != 2) return 'Not!!';
  }
  return 'Jumping!!';
}