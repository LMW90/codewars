/* Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/
function paul(x){
  // enter activity values data
  const activities = {"kata": 5, "Petes kata": 10, "life": 0, "eating": 1};
  // sum up actvity scores
  const misery = x.reduce((score,activity) => score + activities[activity], 0);
  // return respective string
  return (misery < 40)? "Super happy!" : (misery < 70)? "Happy!" : (misery < 100)? "Sad!" : "Miserable!";
}