// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
function logs(x , a, b){
  // log(a) + log(b) = log(ab)
  // logx(y) = ln(y) / ln(x)
  return Math.log(a*b) / Math.log(x)
}