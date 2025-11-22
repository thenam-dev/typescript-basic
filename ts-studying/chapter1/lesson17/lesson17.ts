type namType = number | string | object | boolean; // dinh danh type theo aliases

function addNumberOrString2(a: namType, b: number | string) {
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
console.log(">>> check:", addNumberOrString2("hello ", "thenam"));
