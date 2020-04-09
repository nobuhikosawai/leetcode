export const backspaceCompare = (S: string, T: string): boolean => {
  const sArr = S.split('#');
  const tArr = T.split('#');
  const slength = sArr.length;
  const tlength = tArr.length;

  const backSpacedS = sArr.reduce((acc, s, idx) => {
    if (s) {
      if (idx === slength - 1) {
        return acc + s;
      } else {
        return acc + s.slice(0, -1);
      }
    } else {
      return acc.slice(0, -1);
    }
  }, '');

  const backSpacedT = tArr.reduce((acc, s, idx) => {
    if (s) {
      if (idx === tlength - 1) {
        return acc + s;
      } else {
        return acc + s.slice(0, -1);
      }
    } else {
      return acc.slice(0, -1);
    }
  }, '');

  return backSpacedS === backSpacedT;
};
