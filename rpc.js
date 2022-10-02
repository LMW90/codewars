// determine result of rock paper scissors match
const rps = (p1, p2) => {
  if (p1 === p2){
    return "Draw!"
  }
  if (p1 === 'paper'){
    return (p2 === 'scissors')
    ? 'Player 2 won!'
    : 'Player 1 won!'
  }
  if (p1 === 'rock'){
    return (p2 === 'paper')
    ? 'Player 2 won!'
    : 'Player 1 won!'
  }
  if (p1 === 'scissors'){
    return (p2 === 'rock')
    ? 'Player 2 won!'
    : 'Player 1 won!'
  }
};