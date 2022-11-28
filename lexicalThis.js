/* Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.  
*/
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends: function(f){ for (let friend of f) this._friends.push(friend)}
  }
  return person;
}