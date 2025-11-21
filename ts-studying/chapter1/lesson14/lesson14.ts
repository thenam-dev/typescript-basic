const sum = (a: number, b: number): number => {
  return a + b;
};

const handleLogs = (message: string): void => {
  console.log(">>>message:", message);
};

console.log(">>>check sum:", sum(1, 2));
handleLogs("HELLO BRO");
