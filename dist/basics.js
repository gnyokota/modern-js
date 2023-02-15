document.querySelector("h1").style.color = "green";
const number = 5;
const numberString = String(number);
const isValid = true;
const isValidString = isValid.toString();
const numberStr = "10";
const strToNumber = parseInt(numberStr);
const strToNumberFloat = parseFloat(numberStr);
console.log(strToNumberFloat);
const num1 = 100;
const num2 = 50;
const value = Math.PI;
const valueRound = Math.round(2.4);
const valueCeil = Math.ceil(2.4);
const valueFloor = Math.ceil(2.4);
const rootSqr = Math.sqrt(36);
const power = Math.pow(6, 2);
const random = Math.random();
const myName = "Giovana Yokota";
console.log(myName.slice(2, 6));
const mySplit = myName.split(" ");
console.log(mySplit);
console.log(myName.replace("Yokota", "Bicego"));
const numberSet = [1, 2, 3, 4];
console.log(Array.isArray(numberSet));
function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}
const data = {
    firstName: "Giovana",
    lastName: "Yokota",
};
console.log(getKeyByValue(data, "Giovana"));
const today = new Date();
const birthday = new Date("02-13-1992");
console.log(birthday);
birthday.setMonth(7);
console.log(birthday);
for (let n in data) {
    console.log(`${n}:${data[n]}`);
}
const height = window.outerHeight;
console.log({ height });
const width = window.outerWidth;
console.log({ width });
const loct = window.location;
console.log(loct.hostname);
console.log(loct.href);
console.log(loct.search);
const nav = window.navigator;
console.log(nav.language);
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
