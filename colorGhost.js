/* Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/
var Ghost = function() {
  // get a random number    
  let roll = Math.random()
  // assign color property accordingly to random result
  this.color = (roll < .25) ? "white" : (roll < .5) ? "yellow" : (roll < .75) ? "purple" : "red"
};