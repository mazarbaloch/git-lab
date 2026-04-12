function add(a, b) {
  return a + b;
}

function runTests() {
  console.log("Running tests...");

  if (add(2, 2) !== 4) {
    throw new Error("Test failed: 2 + 2 should equal 4");
  }

  if (add(1, 1) !== 2) {
    throw new Error("Test failed: 1 + 1 should equal 2");
  }

  console.log("All tests passed!");
}

runTests();