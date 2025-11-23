//readonly: chi doc => KO MODIFY (update/delete)
class Person2 {
  readonly birthDate: Date;
  //readonly(attribute) =! const(variable)

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person2(new Date(2000, 11, 23));
// person.birthDate = new Date(1991, 12, 25); // compile error
console.log("Birthday:", person.birthDate);
