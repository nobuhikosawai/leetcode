export const groupAnagrams = (strs: string[]): string[][] => {
  let ans: {[key: string]: string[]} = {};
  strs.forEach(str => {
    const sortedChar = str.split('').sort();
    const sortedStr = sortedChar.toString();
    if (!ans[sortedStr]) {
      ans[sortedStr] = [str];
    } else {
      ans[sortedStr].push(str);
    }
  });
  return Object.values(ans);
};
