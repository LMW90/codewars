/* ☑️ Return the percentage % of the total population that got infected.

❗❗ The first and the last continent are not connected!

💡 Example:

 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333

➕ For maps without oceans "X" the whole world is connected.

➕ For maps without "0" and "1" return 0 as there is no population.
*/
function infected(s) {
  // handle 0/0
  if (!s.includes('1')) return 0;
  let infected = 0;
  let total = 0;
  let continents = s.split('X');
  for (let continent of continents){
    total += continent.length;
    if (continent.includes('1')) infected += continent.length;
  };
  return 100 * (infected / total);
}