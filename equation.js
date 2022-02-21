'use strict';

const fs = require('fs');
const fileName = process.argv[2];
const template = /^-?\d+\.?\d*\s-?\d+\.?\d*\s-?\d+\.?\d*\n/;

const findRoots = (a, b, c) => {
  const d = b * b - 4 * a * c;
  if (d < 0) return [];
  if (d === 0) {
    const x = -1 * b / (2 * a);
    return [x];
  } else {
    const x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
};

const solve = (a, b, c) => {
  if (a === 0) throw new Error('a cannot be 0');
  const fixed = [a, b, c].map((val) => val.toFixed(1));
  const eq = `(${fixed[0]}) x^2 + (${fixed[1]}) x + (${fixed[2]}) = 0`;
  console.log('Equation is: ' + eq);
  const roots = findRoots(a, b, c);
  console.log(`There are ${roots.length} roots`);
  roots.forEach((value, index) => {
    console.log(`x${index + 1} = ${value.toFixed(1)}`);
  });
};

if (fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') throw new Error(`file ${fileName} does not exist`);
      throw err;
    }
    const file = data.toString();
    if (!template.test(file)) throw new Error('invalid file format');
    const coefs = file.trim().split(' ').map((value) => parseInt(value));
    console.log({ coefs });
    solve(...coefs);
  });
} else {

}