class Person4 {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

//De ke thua 1 class, dung keyword extends

class Employee extends Person4 {
  private jobTitle;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    //call the constructor of the Person class:
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  //overwrite
  describe(): string {
    return `${super.describe()} from parent - describe Me`;
  }
}

let emp = new Employee("Nam", "Nguyen", "Web Developer");

console.log(emp.getFullName());
console.log(emp.describe());
