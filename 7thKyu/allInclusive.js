/* Input:

    a string strng
    an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

    a boolean true if all rotations of strng are included in arr
    false otherwise

Examples:

contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

Note:

Though not correct in a mathematical sense

    we will consider that there are no rotations of strng == ""
    and for any array arr: contain_all_rots("", arr) --> true
*/
function containAllRots(str, arr) {
  // create array to store rotations
  let rots = [];
  // populate rotations array
  for (let i = 0; i < str.length; i++){
    rots.push(str.slice(i) + str.slice(0, i))
  };
  // test if every rotations element is in input array
  return rots.every(rot => arr.includes(rot));
}