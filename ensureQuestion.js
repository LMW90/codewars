// write a function, that given a string appends a question amrk to it, if not present already
function ensureQuestion(s) {
  return s.charAt(s.length - 1) == '?' ? s : s + '?'
}