// produce number 5 without using following characters: '123456789-+*/'
function unusualFive() {
  return Number('F'.charCodeAt(''.length) % 'A'.charCodeAt(''.length));
  // return '     '.length;
}