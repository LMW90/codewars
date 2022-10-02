// given an array of "3:1" format of football match scores, calculate total amount of poits earned by the team

function points(games) {
  return games.reduce((acc, item)=>{
    return (item[0] > item[item.length-1])
    ? acc + 3
    : (item[0] === item[item.length-1])
      ? acc + 1
      : acc
  }, 0)
}