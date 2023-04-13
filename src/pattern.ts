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

//3. Observer pattern:
class EventObserver {
  private observers: string[];
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
    console.log(`Subscribe to the function: ${func.name}`);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((it) => it !== func);
    console.log(`Unsubscribe to the function: ${func.name}`);
  }

  fire() {
    this.observers.forEach((it: any) => it.call());
  }
}

const click = new EventObserver();

document
  .querySelector(".sub-ms")
  .addEventListener("click", () => click.subscribe(getCurrentMilliSeconds));

document
  .querySelector(".unsub-ms")
  .addEventListener("click", () => click.unsubscribe(getCurrentMilliSeconds));

document.querySelector(".fire").addEventListener("click", () => click.fire());

const getCurrentMilliSeconds = () =>
  console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);

//4. Mediator pattern:
class User {
  name: string;
  chatroom: any;
  constructor(name: string) {
    this.name = name;
    this.chatroom = null;
  }

  send(message: string, to: User) {
    this.chatroom.send(message, this, to);
  }
  receive(message: string, from: User) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  users: Object;
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }
  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      for (to in this.users) {
        if (this.users[to] !== from) {
          this.users[to].receive(message, from);
        }
      }
    }
  }
}

const john = new User("John");
const sarah = new User("Sarah");
const chartroom = new Chatroom();

chartroom.register(john);
chartroom.register(sarah);
john.send("Hello Sarah", sarah);
