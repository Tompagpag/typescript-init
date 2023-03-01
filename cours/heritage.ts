// class Person {
//     constructor(
//         protected readonly id: number,
//         public firstName: string,
//         public lastName: string
//     ) { }

//     getInformation(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Employe extends Person {
//     constructor(
//         id: number,
//         firstName: string,
//         lastName: string,
//         public readonly salary: number
//     ) {
//         super(id,firstName, lastName);
//     }

//     getInformation(): string {
//         return `${super.getInformation()} | Salary: ${this.salary}€`;
//     }

//     getId(): number {
//         return this.id;
//     }

// }

// const employe = new Employe(1,"Evelyn", "Miller", 2000);
// //Property ’id’ is protected and only accessible
// //employe.id = 2;
// console.log(employe.getId());
