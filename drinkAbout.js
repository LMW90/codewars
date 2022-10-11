// depending on age return a string

function peopleWithAgeDrink(old) {
  let drink = (old < 14) ? 'toddy' : (old < 18) ? 'coke' : (old < 21) ? 'beer' : 'whisky';
  return `drink ${drink}`
};