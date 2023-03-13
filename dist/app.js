try {
    throw new Error("Errorrrrrr");
}
catch (error) {
    console.log(error.message);
}
const reg_a = /hello/i;
console.log(reg_a.exec("hello world"));
console.log(reg_a.test("Hello world"));
console.log("Hello world".match(reg_a));
console.log("Hello world".search(reg_a));
const str = "Hello there";
console.log(str.replace(reg_a, "Hi"));
const regTest = (reg, str) => {
    let pattern = new RegExp(reg);
    if (pattern.test(str)) {
        return `${str} matches ${pattern.source}`;
    }
    else {
        return `${str} does NOT match ${pattern.source}`;
    }
};
console.log(regTest(/world/, "Hello world"));
console.log(regTest(/^h/i, "Hey there"));
console.log(regTest(/e$/i, "Hey there"));
console.log(regTest(/h.llo/i, "Hello there"));
console.log(regTest(/apple?/i, "Apples"));
console.log(regTest(/gr[ae]y/i, "Gray"));
console.log(regTest(/[A-Z]ray/, "Gray"));
console.log(regTest(/[A-Za-z]ray/, "Gray"));
console.log(regTest(/[^A]ray/, "Gray"));
console.log(regTest(/He{2,4}o/, "Hello"));
console.log(regTest(/\w+/, "Hello"));
console.log(regTest(/\W+/, "!!"));
console.log(regTest(/hello\sthere/i, "Hello there"));
console.log(regTest(/\d+/, "1234"));
console.log(regTest(/\D+/, "!!"));
console.log(regTest(/He(?=l)/i, "Hello"));
console.log(regTest(/He(?!l)/i, "Hello"));
