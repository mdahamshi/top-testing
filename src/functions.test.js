import * as f from "./functions.js";

test("Capitalize", () => {
  expect(f.capitalize("hello")).toBe("Hello");
});

test("Reverse string", () => {
  expect(f.reverseString("hello")).toBe("olleh");
});

test("Calculator", () => {
  expect(f.calculator.add(5, 3)).toBe(8);
  expect(f.calculator.subtract(5, 3)).toBe(2);
  expect(f.calculator.divide(5, 3)).toBe(5 / 3);
  expect(f.calculator.divide(5, 0)).toBe(Infinity);
  expect(f.calculator.multiply(5, 3)).toBe(5 * 3);
});

test("caesarCipher ", () => {
  expect(f.caesarCipher("xyz", 3)).toBe("abc");
  expect(f.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(f.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray ", () => {
  expect(f.analyzeArray()).toBeNull();
  expect(f.analyzeArray([])).toBeNull();
  expect(f.analyzeArray([1, 8, 3, 4, 2, 6])).toBeDefined();
  expect(f.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
