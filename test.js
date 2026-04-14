const assert = require("assert");
const { add, subtract, multiply, divide, power, modulo } = require("./index");

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  PASS: ${name}`);
  } catch (err) {
    failed++;
    console.error(`  FAIL: ${name}`);
    console.error(`    ${err.message}`);
  }
}

console.log("Running tests...\n");

// add
test("add(2, 3) === 5", () => assert.strictEqual(add(2, 3), 5));
test("add(-1, 1) === 0", () => assert.strictEqual(add(-1, 1), 0));
test("add(0, 0) === 0", () => assert.strictEqual(add(0, 0), 0));

// subtract
test("subtract(5, 3) === 2", () => assert.strictEqual(subtract(5, 3), 2));
test("subtract(0, 5) === -5", () => assert.strictEqual(subtract(0, 5), -5));

// multiply
test("multiply(3, 4) === 12", () => assert.strictEqual(multiply(3, 4), 12));
test("multiply(0, 100) === 0", () => assert.strictEqual(multiply(0, 100), 0));

// divide
test("divide(10, 2) === 5", () => assert.strictEqual(divide(10, 2), 5));
test("divide(7, 2) === 3.5", () => assert.strictEqual(divide(7, 2), 3.5));
test("divide by zero throws", () => {
  assert.throws(() => divide(1, 0), { message: "Division by zero" });
});

// power (new)
test("power(2, 3) === 8", () => assert.strictEqual(power(2, 3), 8));
test("power(5, 0) === 1", () => assert.strictEqual(power(5, 0), 1));
test("power(10, 1) === 10", () => assert.strictEqual(power(10, 1), 10));

// modulo (new)
test("modulo(10, 3) === 1", () => assert.strictEqual(modulo(10, 3), 1));
test("modulo(15, 5) === 0", () => assert.strictEqual(modulo(15, 5), 0));
test("modulo by zero throws", () => {
  assert.throws(() => modulo(1, 0), { message: "Modulo by zero" });
});

console.log(`\nResults: ${passed} passed, ${failed} failed, ${passed + failed} total`);

if (failed > 0) {
  process.exit(1);
}
