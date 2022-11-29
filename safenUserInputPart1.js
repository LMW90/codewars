/* our mission is to implement a function that converts the following potentially harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;

Good luck :D
*/
function htmlspecialchars(formData) {
    let pairs = {'<': '&lt;', '>': '&gt;', '"': '&quot;'}
    // ensure ampersand is first
    formData = formData.replace(/&/g, '&amp;')
    // replace other characters
    for (let pair in pairs){
      let regex = new RegExp(pair, 'g')
      formData = formData.replace(regex, pairs[pair])
    }
    return formData
  }