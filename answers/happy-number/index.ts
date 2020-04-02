export const isHappy = (n: number): boolean => {
  const HAPPY_NUMBER = 1;

  if (n < 0) {
    return false;
  }

  const splitTexts = n.toString().split('');

  let sum = 0;
  splitTexts.forEach(t => {
    sum += Number(t) ** 2; 
  });

  if (sum >= 0 && sum < 10) {
    return sum === HAPPY_NUMBER;
  } else {
    return isHappy(sum);
  }
}
