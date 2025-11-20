const sum3 = (x: number, y: number) => {
  return x + y;
};

//no error
console.log(">>>check sum3 =", sum3(5, 2)); //15

//error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(sum3(5, "15"));
