// for(initialization; condition; expression)
for (let i = 0; i < 10; i++) {
  console.log(">>> i =", i);
}

//==============Trg hop dac biet=============

let i1 = 0;
for (; i1 < 10; i1++) {
  // ko khoi tao i
  console.log(i1);
}

for (let i = 0; ; i++) {
  // can co if/break de vong lap ko chay vo han
  console.log(i);
  if (i > 9) break;
}

let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}
