//abstract classes: truu tuong
//co the chua 1 hoac nhieu normal method/abstract method(ko chua body)
abstract class Employee1 {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number; //abstract method

  //normal method
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.getFullName()} make ${this.getSalary()}$ a month`;
  }
}

//voi abstract class, cta ko the tao moi 1 object voi no
// const e1 = new Employee1("Nam", "Nguyen") -> error

class FullTimeEmployee extends Employee1 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName); //dung super de ke thua lai cha
  }

  //can viet method nay, vi no dc khai bao abstract o tren
  getSalary(): number {
    //abcxyz
    return this.salary;
  }
}

class Contractor extends Employee1 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName); //dung super de ke thua lai cha
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

const test1 = new FullTimeEmployee("Nam", "Nguyen", 1000);
console.log(">>> test 1:", test1.compensationStatement());
