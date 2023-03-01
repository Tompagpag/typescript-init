class Employee {
    public firstName: string;
    public lastName: string;
    fullName!: string;
    private _salary: number = 0;
    daysOff: string[] = [];
    birthday!: Date;
    static count: number = 0;

    /*     constructor() {
            this.firstName = "Evelyn";
            this.lastName = "Miller";
        } */
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setFullName(firstName, lastName);
        Employee.count++;
    }

    setFullName(firstName: string, lastName: string): void {
        this.fullName = `${firstName} ${lastName}`;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    /*  increaseSalary(percent: number): void {
         if (percent >= 0 && percent <= 100) {
             const amount = this.salary * (percent / 100);
             this.salary += amount;
         }
     } */

    //paramètres peuvent aussi être déclarés de manière optionnelle en ajoutant le caractère "?"
    /*  increaseSalary(percent?: number): void {
         if (percent) {
             if (percent >= 0 && percent <= 100) {
                 this.salary += this.salary * (percent / 100);
             }
         } else {
             this.salary += this.salary * 0.02;
         }
     } */
    //parametre par defaut
    increaseSalary(percent: number = 2): void {
        if (percent >= 0 && percent <= 100) {
            this._salary += this._salary * (percent / 100);
        }
    }

    takeDaysOff(...days: string[]) {
        days.forEach(day => {
            const available = this.daysOff.every(dayOff => {
                return day !== dayOff;
            });
            if (available) {
                this.daysOff.push(day);
            }
        });
    }

    setBirthday(birthday: Date): void;
    setBirthday(value: string): void;
    setBirthday(birthday: any): void {
        if (birthday instanceof Date) {
            this.birthday = birthday;
        }
        if (typeof birthday === "string") {
            this.birthday = new Date(birthday);
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(salary: number) {
        const isNegative = salary < 0;
        if (!isNegative) {
            this._salary = salary;
        }
    }


}


//const employee = new Employee();
//employee.firstName = "Evelyn";
//employee.lastName = "Miller";

const employee = new Employee("Evelyn", "Miller");
const fullName = employee.getFullName();
console.log(fullName);
//employee.salary = 2000;
//employee.increaseSalary(5);
//employee.increaseSalary();
//console.log(employee.salary);

const firstDay = "2019/12/24";
const secondDay = "2019/12/26";
employee.takeDaysOff(firstDay, secondDay);
console.log(employee.daysOff);
employee.takeDaysOff(firstDay);
console.log(employee.daysOff);

employee.setBirthday("December 17, 1992 03:24:00");
console.log(employee.birthday);
employee.setBirthday(new Date("April 05, 1978 15:58:00"));
console.log(employee.birthday);


employee.salary = -2000;
console.log(employee.salary);
employee.salary = 2000;
console.log(employee.salary);
