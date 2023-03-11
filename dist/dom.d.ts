declare function Person(firstName: string, lastName: string, dob: string): void;
declare const person: any;
declare const personProps: {
    greeting: () => string;
};
declare const mary: any;
declare class PersonClass {
    firstName: string;
    lastName: string;
    constructor(firstName: any, lastName: any);
    getFullName(): string;
    static classType(): string;
}
declare const joe: PersonClass;
declare class MarriedPersonClass extends PersonClass {
    marriedName: string;
    constructor(firstName: any, lastName: any, marriedName: any);
    getMarriedFullName(): string;
}
declare const michelle: MarriedPersonClass;
