class Circle {
  static pi: number = 3.14;
  public test: number = 69; //non-static

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  calculateCircumference(radius: number): number {
    return 2 * Circle.pi * radius;
  }
}

//static: ko phai khai bao object moi
console.log(">>>check pi =", Circle.pi);
console.log(">>>check area =", Circle.calculateArea(10));

// console.log(">>>check test =", Circle.test); -> error
let t = new Circle();
console.log(">>>check test =", t.test);
