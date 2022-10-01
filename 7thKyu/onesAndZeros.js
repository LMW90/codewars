// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
  return arr.reduce((acc, item, index, array)=>{
    return acc + item * 2 ** (array.length - index - 1)
  }, 0)
};

// return parseInt('', 2) next time