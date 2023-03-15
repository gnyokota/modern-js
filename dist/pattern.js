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
