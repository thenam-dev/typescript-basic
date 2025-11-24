class Person3 {
  private _age: number;
  private firstName: string;
  private lastName: string;

  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //getter
  get age() {
    return this._age;
  }

  //setter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw Error("Invalid age");
    }
    this._age = age2;
  }
}

let person3 = new Person3(21, "Nam", "Nguyen");
// person3.age = 31
let checkAge = person3.age; // getter
// person3.setAge(69); //setter

person3.age = 68;

console.log(">>> check age:", person3); //getter
//person3.age = 21
