/* The new operator in JavaScript creates objects by following these three steps:

    First, it creates a new empty object. (Already done for you here.)
    Next, it sets the new object’s `.__proto__` property to match the prototype property of the function being invoked.
    Finally, the operator invokes the function and passes the new object as the “this” reference.


Use this understanding of the new operator to create an instance of the object MyObject, but do so without calling "new MyObject()".
*/
// declare empty object
let myObj = {};
// set empty objects constructor to constructor
myObj.constructor = MyObject;
// set empty object's proto to constructors prototype
myObj.__proto__ = MyObject.prototype;
// call constructor with object as thisArg
MyObject.call(myObj);