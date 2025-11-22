let age: number = 0;

//convert to Boolean => Boolean(age)
if (age > 18) {
  console.log("You can watch love movies...");
} else {
  console.log("Oops! >>> You can watch cartoon...");
}

//================================

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10;
} else if (itemCount > 10 && itemCount <= 15) {
  discount = 20;
} else {
  discount = 15;
}

console.log(">>> check discount:", discount);
