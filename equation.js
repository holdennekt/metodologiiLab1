'use strict';

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
