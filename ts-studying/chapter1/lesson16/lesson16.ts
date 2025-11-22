function addNumberOrString(a: number | string | boolean, b: number | string) {
  // union type: gan nh data type cho bien
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

//loi khi running
//loi khi compile
console.log(">>> check:", addNumberOrString(true, "thenam"));
