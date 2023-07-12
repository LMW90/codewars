/* Write a function that returns the total surface area and volume of a trapezioidal prism as an array [area, volume], rounded to the nearest integer. A trapezoidal prism is shape that has trapezium (trapezoid) cross sections in one direction and rectangular cross sections in the other directions.

a = top width of trapezium cross section, b = base width of trapezium cross section, h = height of cross section (distance from a to b), l = length of prism.

Trapezium cross section:

        a
    __________      
   /          \    |
  /            \   |h
 /______________\  |
        b

The tapazium cross section has one line of symmetry:

    ____|____
   /    |    \
  /     |     \
 /______|______\
        |
*/
function areaVolume(a,b,h,l) {
  // calculate arms length
  let c = Math.sqrt(((b-a)/2)**2 + h**2);
  // calculate area and volume, round
  let [area, volume] = [Math.round((a+b+2*c)*l + (a+b)*h), Math.round(.5*(a+b)*h*l)];
  return [area, volume];
}