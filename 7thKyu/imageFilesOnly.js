/* Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]] 

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/
function imageFilter(arr) {
  // list out extensions
  let extensions = ["jpg","gif","png","tiff","svg","bmp"]
  let output = [];
  // loop through files
  for (let file of arr){
    // split along '.'s
    let path = file.split('.');
    // assign extension and filename to variables
    let extension = path[path.length-1];
    let filename = path.slice(0, path.length-1).join('.');
    // if valid extension and filename append array to result else append null
    if (extensions.includes(extension.toLowerCase()) && filename) output.push([file, filename, extension]);
    else output.push(null);
  }
  return output;
}