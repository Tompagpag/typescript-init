/* interface Person3 {
    firstName: string;
    lastName: string;
    getInformation(): string;
}

class Employe_int implements Person3 {
    constructor(
        public firstName: string,
        public lastName: string
    ) { }
    getInformation(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const evelyn = new Employe_int("Evelyn", "Miller");
const john: Person3 = new Employe_int("John", "Riley");
console.log(john.getInformation()); */

interface Person4 {
    firstName: string;
    lastName: string;
    email?: string;
}

interface Salaried {
    salary: number;
}

class Trainer implements Person4, Salaried {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number,
        public email?: string
    ) { }

}
const evelyn: Person4 = new Trainer("Evelyn", "Miller", 2000);
//La propriété 'salary' n'existe pas sur le type
//evelyn.salary = 2100;

const john: Salaried = new Trainer("John", "Riley", 2000);
//La propriété 'firstName' n'existe pas sur le type 'Salaried'
//john.firstName = "Evelyn";


//exemple concret
interface Add {
    (number1: number, number2: number): number
}

const add: Add = (number1: number, number2: number) => {
    return number1 + number2;
};

console.log(add(1, 2));
