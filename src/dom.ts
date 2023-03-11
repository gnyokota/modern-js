//object.prototype
function Person(firstName: string, lastName: string, dob: string) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.brithday = new Date(dob);
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const person = new Person("Giovana", "Yokota", "01-16-1992");
console.log(person.getFullName());

//object create
const personProps = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
};

const mary = Object.create(personProps);
mary.firstName = "Mary";
mary.lastName = "Doe";

console.log(mary.greeting());

class PersonClass {
  firstName: string;
  lastName: string;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  static classType() {
    return "This is a person class";
  }
}

const joe = new PersonClass("Joe", "Doe");

console.log(joe.getFullName());
console.log(PersonClass.classType());

//subclass
class MarriedPersonClass extends PersonClass {
  marriedName: string;
  constructor(firstName, lastName, marriedName) {
    super(firstName, lastName);
    this.marriedName = marriedName;
  }

  getMarriedFullName() {
    return `My name was ${this.firstName} ${this.lastName}, now it is ${this.firstName} ${this.marriedName}`;
  }
}

const michelle = new MarriedPersonClass("Michelle", "Smith", "Doe");
console.log(michelle.getMarriedFullName());
