function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

function runInfinity(): void {
  console.log(">>> run inside runInfinity");
  while (true) {
    console.log("running...");
  }
}

// handleException("just a test error");
let a = handleException("just a test error");
console.log(">>>check a", a);
