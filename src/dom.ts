//constructor
function Person(name: string, age: number, dob: string) {
  this.name = name;
  this.age = age;
  this.brithday = new Date(dob);
}

console.log(new Person("Giovana", 30, "01-16-1992"));

//object.prototype
function Person2(firstName: string, lastName: string, dob: string) {
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
