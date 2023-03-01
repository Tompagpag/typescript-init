abstract class Person2 {

    constructor(
        public firstName: string,
        public lastName: string
    ) { }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    abstract getInformation(): string;
}

class Employe2 extends Person2 {
    constructor(
        firstName: string,
        lastName: string,
        public salary: number
    ) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getInformation(): string {
        return `${super.getFullName()} - ${this.salary}€`;
    }
}

const employ = new Employe2("Evelyn", "Miller", 2000);
console.log(employ.getInformation());
