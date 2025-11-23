class Employee {
  public empCode: string;
  protected empName: string; //ko the truy cap ben ngoai class

  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
  //getter/setter
}

let emp = new Employee("a", "b"); //immutable: ko the sua doi
// emp.empCode = "123";
// emp.empName = "thenam";

console.log(">>> check emp:", emp);

class SalesEmployee extends Employee {
  private department: string;
  constructor(name: string, code: string, department: string) {
    super(name, code);
    this.department = department;
  }
}

let empSale = new SalesEmployee("Nam The", "123", "Sales");
empSale.empCode; //Compiler Error;

//public(ko can thiet phai khai bao): truy cap everywhere
//private: gioi han quyen truy cap bien trong cung class/Ngoai class -> error
//protected: lop con (ke thua) se ko the truy cap dc
