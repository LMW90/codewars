/* Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
];

The scores for each grade is:

    A: 30 points
    B: 20 points
    C: 10 points
    D: 5 points
    Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
  ,
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

return ["name1", "name3"];
*/
function findHack(arr) {
  let points = { A: 30, B: 20, C: 10, D: 5 };
  // map recalculated score and if extra condition is met to original array
  let scores = arr.map(person => [
      person[0],
      person[1],
      person[2].reduce((sum, mark) => sum + (points[mark] || 0), 0),
      person[2].length >= 5 && person[2].every(mark => "AB".includes(mark))
    ]);
  // map name, preexisting score and final recalculated score
  scores = scores.map(person => [person[0], person[1], person[2] + (person[3] ? 20 : 0)]);
  // return names of students with scores not matching
  return scores.reduce((cheaters, person) => {
    if (scores[1] > 200 || person[1] !== person[2]) cheaters.push(person[0]);
    return cheaters;
  }, []);
}