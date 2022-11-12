/* create a function that, given coords of triangle vertices, calculates it's barycenter */
function barTriang(p1, p2, p3){
  // define coordinates
  let x = 0, y = 0
  // calculate coordinates
  for (let arg of arguments){
    x += arg[0]
    y += arg[1]
  }
  x /= 3.0
  y /= 3.0
  // del with poor testing and return
  return [+x.toFixed(4), +y.toFixed(4)]
}