class UiController {
    constructor(text) {
        this.text = text;
    }
    changeText() {
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
class Singleton {
    constructor() {
        console.log("constructor has been called");
    }
    static createInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someLogic() {
        console.log("Here is some logic");
    }
}
const myInstanceA = Singleton.createInstance();
myInstanceA.someLogic();
const myInstanceB = Singleton.createInstance();
myInstanceB.someLogic();
class Manager {
    getSalary() {
        return "I am over paid";
    }
}
class Developer {
    getSalary() {
        return "I am under paid";
    }
}
class StaffFactory {
    static getStaffInstance(userType) {
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
class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(func) {
        this.observers.push(func);
        console.log(`Subscribe to the function: ${func.name}`);
    }
    unsubscribe(func) {
        this.observers = this.observers.filter((it) => it !== func);
        console.log(this.observers);
        console.log(`Unsubscribe to the function: ${func.name}`);
    }
    fire() {
        this.observers.forEach((it) => it.call());
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
const getCurrentMilliSeconds = () => console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
