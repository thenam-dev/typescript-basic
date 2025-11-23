for (let index = 0; index < 9; index++) {
  //if index is odd, skip it
  if (index % 2 === 1) {
    continue; // skip 1 lan chay
  }
  console.log(index);
}

let index = -1;
while (index < 9) {
  index = index + 1;
  if (index % 2) {
    continue;
  }
  console.log(index);
}

let indexs = 9;
let count = 0;
do {
  indexs += 1;
  if (indexs % 2) {
    continue;
  }
  count += 1;
} while (indexs < 99);
console.log(count);
