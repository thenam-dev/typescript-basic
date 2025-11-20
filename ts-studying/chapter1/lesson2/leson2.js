// perfect
const sum = (x, y) => {
  return x + y;
};

console.log(">>>check sum1 =", sum(5, "6")); //11

//need to validate
const sum2 = (x, y) => {
  //validate: x, y are number ???
  return x + y;
};

console.log(">>>check sum2 =", sum("name", 20));
