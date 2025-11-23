let sum4 = (x, y, z) => {
  console.log(">>> check z =", z);
  if (z) {
    return x + y + z;
  }
  return x + y;
};

console.log(">>> check sum4 =", sum4(1, 2));

//NaN: not a number; null/undefined
