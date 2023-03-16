/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
function domainName(url){
  // test for http(s)//.www.*. - protocol and www
  let result = url.match(/(?<=http:\/\/www\.|https:\/\/www\.).*?(?=\.)/);
  // test for http(s)//*. or www - protocol or www
  if (!result) result = url.match(/(?<=http:\/\/|https:\/\/|www\.).*?(?=\.)/);
  // test for links with no protocol
  if (!result) result = url.split('.');
  return result[0];
}