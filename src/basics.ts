/* DOM manipulation:
 */
(document.querySelector("h1") as HTMLHeadElement).style.color = "green";

// Type conversion:
const number: number = 5;
const numberString: string = String(number);
const isValid: boolean = true;
const isValidString: string = isValid.toString();

const numberStr: string = "10";
const strToNumber: number = parseInt(numberStr);
const strToNumberFloat: number = parseFloat(numberStr);
console.log(strToNumberFloat);

//Math object:
const num1 = 100;
const num2 = 50;

const value = Math.PI;
const valueRound = Math.round(2.4);
const valueCeil = Math.ceil(2.4);
const valueFloor = Math.ceil(2.4);
const rootSqr = Math.sqrt(36);
const power = Math.pow(6, 2);
const random = Math.random();

//slice()
const myName = "Giovana Yokota";
console.log(myName.slice(2, 6));
const mySplit = myName.split(" ");
console.log(mySplit);
console.log(myName.replace("Yokota", "Bicego"));

//Array
const numberSet = [1, 2, 3, 4];
console.log(Array.isArray(numberSet));

//Object literal
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

const data = {
  firstName: "Giovana",
  lastName: "Yokota",
};
console.log(getKeyByValue(data, "Giovana"));

//date:
const today = new Date();
const birthday = new Date("02-13-1992");
//I can also use 02/13/1992
console.log(birthday);
birthday.setMonth(7);
console.log(birthday);

//loop:
for (let n in data) {
  console.log(`${n}:${data[n]}`);
}

//window METHODS:
//node: computer/system is the environment
//client: window is the environment
const height = window.outerHeight;
console.log({height});
const width = window.outerWidth;
console.log({width});

const loct = window.location;
console.log(loct.hostname);
console.log(loct.href);
console.log(loct.search);
// window.location.href = "https://google.com";
// window.history.go(-1);
const nav = window.navigator;
console.log(nav.language);

//let and const
var a = 4;
let b = 5;
const c = 6;

function test() {
  a = 1;
  b = 2;
  const c = 3;

  console.log(`function scope a:${a}, b:${b}, c:${c}`);
}

test();
console.log(`global scope a:${a}, b:${b}, c:${c}`);
