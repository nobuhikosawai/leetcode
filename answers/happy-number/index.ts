// https://leetcode.com/problems/happy-number/

export const isHappy = (n: number): boolean => {
  const HAPPY_NUMBER = 1;
  const prevValues: number[] = [];

  const happyChecker = (n: number): boolean => {
    if (n < 0) {
      return false;
    }

    prevValues.push(n);
    const splitTexts = n.toString().split('');

    let sum = 0;
    splitTexts.forEach((t) => {
      sum += Number(t) ** 2;
    });

    if (sum === HAPPY_NUMBER) {
      return true;
    } else if (prevValues.some((v) => v === sum)) {
      // this will go to infinite loop.
      return false;
    } else {
      prevValues.push(sum);
      return happyChecker(sum);
    }
  };

  return happyChecker(n);
};
