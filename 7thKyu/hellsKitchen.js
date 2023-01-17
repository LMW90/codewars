/* Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/
function gordon(a){
  // allcaps
  a = a.toUpperCase();
  // exclamations
  a = a.split(" ").map(word => word + "!!!!").join(" ");
  // vowels
  a = a.split("").map(char => {
    if (char == "A") return "@";
    if ("EIOU".includes(char)) return "*";
    return char;
  }).join("");
  return a;
}