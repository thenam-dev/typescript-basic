//spread syntax vs rest => copy all
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(getTotal()); //0
console.log(getTotal(10, 20)); //30
console.log(getTotal(10, 20, 30)); //60

function multiply(n: number, ...m: number[]) {
  let a = m.map((x) => {
    console.log("check x =", x);
    return x * x;
  });
  return m.map((x) => n * x);
}
// 'a' gets value [10,20,30,40]
const test31 = multiply(15, 1, 2, 3, 4);
console.log(">>> check test31 =", test31);

function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Xin chao", "thenam &", "namthe"));
