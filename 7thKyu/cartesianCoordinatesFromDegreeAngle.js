/* Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rounded to 10 places).

For example:

coordinates(90,1)
=> (0.0, 1.0)

coordinates(45, 1)
=> (0.7071067812, 0.7071067812)
*/
function coordinates(degrees, radius, radAngle= Math.PI*degrees/180) {
  // convert degrees to radians
  // returned coordiantes calculated with built in trig functions, rounded to 10 decimal places
  return [Math.round(10000000000*radius*Math.cos(radAngle))/10000000000,
          Math.round(10000000000*radius*Math.sin(radAngle))/10000000000];
}