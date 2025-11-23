// //using prototype
// function Personn(ssn, firstName, lastName) {
//   this.ssn = ssn;
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Personn.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// let person = new Personn("123", "Nam", "Nguyen");
// console.log(person.getFullName());

//ES6, using keyword 'class'
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let thenam = new Person("123", "Nam", "Nguyen");
console.log(">>> check class:", thenam);
console.log("Full name:", thenam.getFullName());
