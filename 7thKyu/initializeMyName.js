/* Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).
Examples

'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/
function initializeNames(name){
  let names = name.split(' ');
  return names.map((n, i) => (i != 0 && i != names.length - 1) ? n[0] + '.' : n).join(' ');
};