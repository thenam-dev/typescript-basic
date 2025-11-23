//optional parameters :?

const sum5 = (x: number, y: number, z?: number) => {
  if (z) {
    return x + y + z;
  }
  return x + y;
};

console.log(">>> check sum5 =", sum5(2, 5), sum5(1, 2, 3));
