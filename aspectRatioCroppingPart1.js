/* Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.
*/
function aspectRatio(x,y){
  return [Math.ceil(y*16/9), y]
}