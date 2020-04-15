// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3299/
export const stringShift = (s: string, shift: number[][]) => {
  let sHash = {left: 0, right: 0};
  shift.forEach(sh => {
      if (sh[0] === 0) {
          sHash.left += sh[1]
      } else {
          sHash.right += sh[1];
      }
  });
  
  let amount = 0;
  if (sHash.right === sHash.left) {
      return s;
  } else if (sHash.right > sHash.left) {
      amount = (sHash.right - sHash.left) % s.length;
      const latter = s.substring(s.length - amount);
      const prev = s.substring(0, s.length - amount);
      return latter + prev;
  } else {
      amount = (sHash.left - sHash.right) % s.length;
      const prev = s.substring(0, amount);
      const latter = s.substring(amount);
      return latter + prev;
  }
};
