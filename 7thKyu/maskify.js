// return masked string - repleca all characters with '#' except terminal four
function maskify(cc) {
  // regex free
  if (cc.length < 5) return cc;
  return '#'.repeat(cc.length - 4) + cc.slice(-4);
}