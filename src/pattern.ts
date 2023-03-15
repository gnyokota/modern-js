//reusable solutions to ocurring problems

//1.module pattern:
class UiController {
  private text: string;
  constructor(text: string) {
    this.text = text;
  }

  private changeText() {
    const element = document.querySelector("h1");
    element.textContent = this.text;
  }

  callChangeText() {
    this.changeText();
    console.log(this.text);
  }
}

const uiController = new UiController("JavaScript Pattern");
uiController.callChangeText();

//2. singleton:
class Singleton {
  static instance: Singleton;

  private constructor() {
    console.log("constructor has been called");
  }

  static createInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someLogic() {
    console.log("Here is some logic");
  }
}

const myInstanceA = Singleton.createInstance();
myInstanceA.someLogic();
const myInstanceB = Singleton.createInstance();
myInstanceB.someLogic();

//Factory pattern:
interface IStaff {
  getSalary(): string;
}

class Manager implements IStaff {
  getSalary(): string {
    return "I am over paid";
  }
}

class Developer implements IStaff {
  getSalary(): string {
    return "I am under paid";
  }
}

class StaffFactory {
  static getStaffInstance(userType: string): IStaff {
    switch (userType) {
      case "Manager":
        return new Manager();
      default:
        return new Developer();
    }
  }
}

const manager = StaffFactory.getStaffInstance("Manager");
console.log(manager.getSalary());
const developer = StaffFactory.getStaffInstance("Developer");
console.log(developer.getSalary());
