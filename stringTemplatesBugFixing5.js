// fix the bug
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}