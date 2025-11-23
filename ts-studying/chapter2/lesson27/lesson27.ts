// function(parameter1:type, parameter2:type)
function sum(a: number, b: number) {
  return a + b;
}

//anonymous function () => {}
const sum2 = (a: number, b: number) => {
  return a + b;
};

console.log("check sum:", sum2(10, 15));
