//catch the error
try {
  throw new Error("Errorrrrrr");
} catch (error) {
  console.log(error.message);
}

//i: case insensitive
const reg_a = /hello/i;
//gives the index is where the world starts
console.log(reg_a.exec("hello world"));
console.log(reg_a.test("Hello world"));
console.log("Hello world".match(reg_a));
//search: returns the index of first match, if not found -1
console.log("Hello world".search(reg_a));
//replace: returns a new string replacing the match
const str = "Hello there";
console.log(str.replace(reg_a, "Hi"));

const regTest = (reg, str) => {
  let pattern = new RegExp(reg);
  if (pattern.test(str)) {
    return `${str} matches ${pattern.source}`;
  } else {
    return `${str} does NOT match ${pattern.source}`;
  }
};

console.log(regTest(/world/, "Hello world"));
//start with: ^
console.log(regTest(/^h/i, "Hey there"));
//ends with: $
console.log(regTest(/e$/i, "Hey there"));
//matches any character: .
console.log(regTest(/h.llo/i, "Hello there"));
//Optional: ?
console.log(regTest(/apple?/i, "Apples"));
//OR: []
console.log(regTest(/gr[ae]y/i, "Gray"));
//Matches any uppercase:
console.log(regTest(/[A-Z]ray/, "Gray"));
//Matches any case:
console.log(regTest(/[A-Za-z]ray/, "Gray"));
//Matches any character except A:
console.log(regTest(/[^A]ray/, "Gray"));
//quantifier: {min,max}
console.log(regTest(/He{2,4}o/, "Hello"));
