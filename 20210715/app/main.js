function sum(a, b) {
  return a + b;
}
console.log("SUM");

NTest(sum, 22, 1, 21);
NTest(sum, 58, 63, -5);
NTest(sum, 553.5, 550, 3.5);
NTest(sum, 0, "0", 0);
NTest(sum, 1, "1", 0);
NTest(sum, 1, 1);
NTest(sum, NaN, [1], null);
NTest(sum, 1, true, false);
NTest(sum, "ZheleznyiKaput", "Zheleznyi", "Kaput");
NTest(sum, NaN, [1, 2], [3, 4]);
NTest(sum, Infinity, Infinity, 2);

function multi(a, b) {
  return a * b;
}
console.log("MULTI");

NTest(multi, 0, 0, 1);
NTest(multi, NaN, "80", 21);
NTest(multi, 6.28, 3.14, 2);
NTest(multi, Infinity, Infinity, 0);
NTest(multi, 0, +0, -0);
NTest(multi, NaN, "iOS", "Android");
NTest(multi, NaN, "iOS", 58);
NTest(multi, Infinity, Infinity, 58);
NTest(multi, NaN, [22, 33, 44], [55, 66, 77]);
NTest(multi, 350, 35, [10]);

function divide(a, b) {
  return a / b;
}
console.log("DIVIDE");

NTest(divide, Infinity, 35, 0);
NTest(divide, NaN, "try1", "try2");
NTest(divide, 1.5, 3, 2);
NTest(divide, 1.5, 3, 2);
NTest(divide, 5, 5);
NTest(divide, NaN, 76, "3.5");
NTest(divide, null, null, null);
NTest(divide, 0, -0, +0);
NTest(divide, 16.5, [33], [2]);
NTest(divide, NaN, NaN, 0);

function subtraction(a, b) {
  return a - b;
}

console.log("SUBTRACTION");
NTest(subtraction, 0, 1, 1);
NTest(subtraction, 4, [5], 1);
NTest(subtraction, Infinity, Infinity, 1);
NTest(subtraction, -6, -4, 2);
NTest(subtraction, 36.6, 36.6, -0);
NTest(subtraction, Infinity, Infinity, Infinity);
NTest(subtraction, NaN, "Try3", 58);
NTest(subtraction, 1, 1, 1, 1);
NTest(subtraction, 0, "0", 0);
NTest(subtraction, 1, "1", 0);

function NTest(func, result, ...args) {
  const callResult = func(...args);
  const passFailed = callResult === result ? "PASS" : "FAILED";
  const str = `${passFailed}: ${func.name}(${args}) Expected: ${result}, Received: ${callResult}`;

  const styles = {
    PASS: "background-color: green; padding: 5px; color: white;",
    FAILED: "background-color: red; padding: 5px;",
  };
  console.log("%c%s", styles[passFailed], str);
}
