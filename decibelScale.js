/* Calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function
*/
function dBScale(intensity) {
  return 10 * Math.log10(intensity / 10 ** -12)
}