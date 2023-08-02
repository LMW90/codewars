/* Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?
Your Task:

You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-).
*/
function determineTime (durations) {
  // split each array element into number of time units, convert into seconds and sum total time
  let time = durations.reduce((totalSeconds, duration) => {
    let timeUnits = duration.split(":").map(unit => parseInt(unit));
    totalSeconds += timeUnits[0]*3600 + timeUnits[1]*60 + timeUnits[2];
    return totalSeconds;
  }, 0);
  // determine if total time is less than 24 hours and return findings
  return time <= 24*3600;
}