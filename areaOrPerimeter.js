// given two sides of rectangle, return it's area if it's a sqare, perimeter otherwise

const areaOrPerimeter = function(l , w) {
  return (l === w)
  ? l*w
  : 2 * (l+w)
};