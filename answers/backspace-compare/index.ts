export const backspaceCompare = (S: string, T: string): boolean => {
  let backSpacedS = '';
  let backSpacedT = '';

  for (let i = 0; i < S.length; i++) {
    const char = S[i]
    if (char === '#') {
      backSpacedS = backSpacedS.slice(0, -1);
    } else {
      backSpacedS += char;
    }
  }

  for (let i = 0; i < T.length; i++) {
    const char = T[i]
    if (char === '#') {
      backSpacedT = backSpacedT.slice(0, -1);
    } else {
      backSpacedT += char;
    }
  }

  return backSpacedS === backSpacedT;
};
