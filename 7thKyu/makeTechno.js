/* German music producer Herbert Von Klunkerkunt has been using the same formula to make industrial techno for over twenty years. Producing at 120 beats per minute, each 4-beat bar contains:

    4 kick drum hits
    8 hihat hits
    2 clap hits

Write a programme that takes the number of minutes and returns the number of "kicks", "hihats" and "claps" Klunkerkunt will need to fill each bar of his new track with percussion in an array. The total number of kicks, hihats and claps should be rounded to the nearest integer.

function perc (3) {}
// should return ["360 kicks", "720 hihats", "180 claps"]

The function should return "invalid track time" if the number of minutes is:

    less than 1
    more than 100
    not a number

function perc (0.22) {}
// should return "invalid track time"
*/
function perc (mins) {
  // test for invalid input
  return mins > 100 || mins < 1 || typeof mins != "number" 
    ? 'invalid track time'
    // return the array
    : [
        `${Math.round(120*mins)} kicks`,
        `${Math.round(240*mins)} hihats`,
        `${Math.round(60*mins)} claps`
      ];
};