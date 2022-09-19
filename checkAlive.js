/* function should return true if the player's health is greater than 0 or false if it is 0 or below.
The function receives one parameter health which will always be a whole number between -10 and 10.
*/
function checkAlive(health) {
  return (health <= 0)
    ? false
    : true;
}