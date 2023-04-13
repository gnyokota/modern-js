declare class UiController {
    private text;
    constructor(text: string);
    private changeText;
    callChangeText(): void;
}
declare const uiController: UiController;
declare class Singleton {
    static instance: Singleton;
    private constructor();
    static createInstance(): Singleton;
    someLogic(): void;
}
declare const myInstanceA: Singleton;
declare const myInstanceB: Singleton;
interface IStaff {
    getSalary(): string;
}
declare class Manager implements IStaff {
    getSalary(): string;
}
declare class Developer implements IStaff {
    getSalary(): string;
}
declare class StaffFactory {
    static getStaffInstance(userType: string): IStaff;
}
declare const manager: IStaff;
declare const developer: IStaff;
declare class EventObserver {
    private observers;
    constructor();
    subscribe(func: any): void;
    unsubscribe(func: any): void;
    fire(): void;
}
declare const click: EventObserver;
declare const getCurrentMilliSeconds: () => void;
declare class User {
    name: string;
    chatroom: any;
    constructor(name: string);
    send(message: string, to: User): void;
    receive(message: string, from: User): void;
}
declare class Chatroom {
    users: Object;
    constructor();
    register(user: any): void;
    send(message: any, from: any, to: any): void;
}
declare const john: User;
declare const sarah: User;
declare const chartroom: Chatroom;
