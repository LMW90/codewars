/* Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self

... and so on.
*/
let circular = {
  value: "Hello World"
}
circular.self = circular