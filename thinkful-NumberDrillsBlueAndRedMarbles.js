/* You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

    the number of blue marbles you put in the bag to start
    the number of red marbles you put in the bag to start
    the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
    the number of red marbles pulled out so far (always lower than the starting number of red marbles)

guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
*/
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart-bluePulled)/(redStart+blueStart-bluePulled-redPulled)
}