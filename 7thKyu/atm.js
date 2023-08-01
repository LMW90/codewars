/* An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/
function solve(n) {
  // deterimne if telling the amount is possible
  if (n % 10) return -1;
  // type out all note types
  let notes = [500, 200, 100, 50, 20, 10];
  let noteCount = 0;
  // for each note type determine number of notes and update the amount and notes quantity
  notes.forEach(note => {
    let currentNotes = Math.floor(n/note);
    noteCount += currentNotes;
    n -= currentNotes*note;
  });
  // return the total number of notes
  return noteCount;
}