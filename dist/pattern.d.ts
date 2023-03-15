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
