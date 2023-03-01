/*
// Type boolean
let isDone: boolean = false;

// Exemples de type number
let hex: number = 0xf00d;
let decimal: number = 6;

// Type string
let color: string = "blue";

// Type Array de number
let list: number[] = [1,2,3];


let nb_or_char: number | string;
nb_or_char=4;
nb_or_char="a"

let myArrayComplex: [number, number, string];
myArrayComplex = [1,2,'b']

let multi: (number | string)[];
multi = [4,"aaz",9,]

// let a:any
// a=8
// a.trim()

// Type de retour void : la fonction ne retourne rien
function sayHello(): void {
    console.log("Hello World");
}

function sayHello2(a:number): void {
    console.log("Hello World");
}


class User {
    status: number | string;
}

function showStatus(user: User): string | number {
    return user.status;
}

let message1: any = "this is a string";
let Message_length1: number = (<string>message1).length;
//equivalent
let message2: any = "this is a string";
let strMessage_length2: number = (message2 as string).length;
*/






// class Employee {
//     firstName!: string;
//     lastName!: string;
//     salary!: number;
//     daysOff: string[] = [];
//     birthday!: Date;

//     /*     constructor() {
//             this.firstName = "Evelyn";
//             this.lastName = "Miller";
//         } */
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }


//     getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     /*  increaseSalary(percent: number): void {
//          if (percent >= 0 && percent <= 100) {
//              const amount = this.salary * (percent / 100);
//              this.salary += amount;
//          }
//      } */

//     //paramètres peuvent aussi être déclarés de manière optionnelle en ajoutant le caractère "?"
//     /*  increaseSalary(percent?: number): void {
//          if (percent) {
//              if (percent >= 0 && percent <= 100) {
//                  this.salary += this.salary * (percent / 100);
//              }
//          } else {
//              this.salary += this.salary * 0.02;
//          }
//      } */
//     //parametre par defaut
//     increaseSalary(percent: number = 2): void {
//         if (percent >= 0 && percent <= 100) {
//             this.salary += this.salary * (percent / 100);
//         }
//     }

//     takeDaysOff(...days: string[]) {
//         days.forEach(day => {
//             const available = this.daysOff.every(dayOff => {
//                 return day !== dayOff;
//             });
//             if (available) {
//                 this.daysOff.push(day);
//             }
//         });
//     }

//     setBirthday(birthday: Date): void;
//     setBirthday(value: string): void;
//     setBirthday(birthday: any): void {
//         if (birthday instanceof Date) {
//             this.birthday = birthday;
//         }
//         if (typeof birthday === "string") {
//             this.birthday = new Date(birthday);
//         }
//     }

// }


// //const employee = new Employee();
// //employee.firstName = "Evelyn";
// //employee.lastName = "Miller";

// const employee = new Employee("Evelyn", "Miller");
// const fullName = employee.getFullName();
// console.log(fullName);
// employee.salary = 2000;
// //employee.increaseSalary(5);
// employee.increaseSalary();
// //console.log(employee.salary);

// const firstDay = "2019/12/24";
// const secondDay = "2019/12/26";
// employee.takeDaysOff(firstDay, secondDay);
// console.log(employee.daysOff);
// employee.takeDaysOff(firstDay);
// console.log(employee.daysOff);

// employee.setBirthday("December 17, 1992 03:24:00");
// console.log(employee.birthday);
// employee.setBirthday(new Date("April 05, 1978 15:58:00"));
// console.log(employee.birthday);


//methode statique
class Employee3 {
    firstName: string;
    lastName: string;
    static nbOfEmployees: number = 0;

    constructor(firstName:string, lastName:string) {
      this.firstName = firstName;
      this.lastName = lastName;
      Employee3.nbOfEmployees++;
    }

    static all(): number {
      return Employee3.nbOfEmployees;
    }
    // static getFullName(): string {
    //     return `${Employee3.firstName} ${Employee3.lastName}`;
    // }
}

new Employee3('tom', 'pag')
new Employee3('tom', 'pag')
new Employee3('tom', 'pag')
console.log(Employee3.all())
