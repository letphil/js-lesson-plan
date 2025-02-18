const sumArray = require("./sum-array.js");

test("adds array of numbers together", () => {
  expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45);
  expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(66);
});

test("returns 0 for an empty array", () => {
  expect(sumArray([])).toBe(0);
});

test("returns the number for an array with a single number", () => {
  expect(sumArray([1])).toBe(1);
});

test("fails if the argument is not an array", () => {
  expect(() => sumArray("hello")).toThrow(
    "Argument must be an array of numbers"
  );
  expect(() => sumArray(1)).toThrow("Argument must be an array of numbers");
  expect(() => sumArray({})).toThrow("Argument must be an array of numbers");
});

test("fails if the array contains non-numeric values", () => {
  expect(() => sumArray([1, 2, 3, "hello"])).toThrow(
    "Array contains non-numeric values"
  );
  expect(() => sumArray([1, 2, 3, NaN])).toThrow(
    "Array contains non-numeric values"
  );
  expect(() => sumArray([1, 2, 3, {}])).toThrow(
    "Array contains non-numeric values"
  );
});
