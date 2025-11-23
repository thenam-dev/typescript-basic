const sum3 = (x: number, y: number): number => {
  //gan kieu du lieu cho function
  return x + y;
  //   return "abc";
};

function sum4(x: number, y: number): number {
  return x + y;
}

console.log(">>> check sum3 =", sum3(1, 10));

let a = 10; //number
a = sum3(1, 10); // string
