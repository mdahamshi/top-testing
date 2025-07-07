export function capitalize(string = "") {
  const firstChar = string.charAt(0).toUpperCase();
  return firstChar.concat(string.slice(1));
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    if (b === 0) return Infinity;
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export function caesarCipher(string, shiftFactor) {
  const helper = (c) => {
    const code = c.charCodeAt(0);
    const fromCC = String.fromCharCode;
    if (c >= "a" && c <= "z") {
      return fromCC(((code - 97 + shift) % 26) + 97);
    }
    if (c >= "A" && c <= "Z") {
      return fromCC(((code - 65 + shift) % 26) + 65);
    }
    return c;
  };

  const arr = string.split("");
  const shift = ((shiftFactor % 26) + 26) % 26; // handel negative shift
  const res = arr.map((c) => helper(c));

  return res.join("");
}

export function analyzeArray(arr) {
  if(! Array.isArray(arr) || arr.length === 0)
    return null;

  const average = arr.reduce((total, num) => total + num, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return {
    average,
    min,
    max,
    length
  };
}