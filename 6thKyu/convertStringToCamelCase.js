// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 

function toCamelCase(str){
  if (str.includes('_')){
    let output = str.split('_')
    output.map((element, index)=>{
      if (index !== 0){
        output[index] = element.slice(0, 1).toUpperCase() + element.slice(1)
      }
    })
    return output.join('')
  } else {
    let output = str.split('-')
    output.map((element, index)=>{
      if (index !== 0){
        output[index] = element.slice(0, 1).toUpperCase() + element.slice(1)
      }
    })
    return output.join('')
  }
}