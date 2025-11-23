let sum66 = (x, y, z = false) => {
  if (z === false) {
    return x + y;
  }
  if (z) {
    return x - y;
  }
};

console.log(">>> check sum66 =", sum66(1, 2), sum66(1, 2, 3));

// sum66(1,2) => z = undefined => 0
// sum66(1,2,3) => z =3
