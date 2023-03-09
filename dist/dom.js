function Person(name, age, dob) {
    this.name = name;
    this.age = age;
    this.brithday = new Date(dob);
}
console.log(new Person("Giovana", 30, "01-16-1992"));
function Person2(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.brithday = new Date(dob);
}
Person2.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
const person2 = new Person2("Giovana", "Yokota", "01-16-1992");
console.log(person2);
console.log(person2.getFullName());
