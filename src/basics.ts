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
