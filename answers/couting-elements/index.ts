// No problem link.
export const countElemenets = (arr: number[]): number => {
  let arrObj: { [key: number]: number } = {};

  arr.forEach((n) => {
    if (!arrObj[n]) {
      arrObj[n] = 1;
    } else {
      arrObj[n] += 1;
    }
  });

  let count = 0;
  Object.keys(arrObj).forEach((key) => {
    const n = Number(key);
    if (arrObj[n + 1]) {
      count += arrObj[n];
    }
  });

  return count;
};
