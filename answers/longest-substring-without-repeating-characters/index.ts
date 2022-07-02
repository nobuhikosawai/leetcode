export function lengthOfLongestSubstring(s: string): number {
  let substr = "",
    maxLength = 0;

  for (const char of s) {
    if (substr.includes(char)) {
      if (substr.length > maxLength) {
        maxLength = substr.length;
      }
      substr = substr.slice(substr.indexOf(char) + 1) + char;
    } else {
      substr += char;
    }
  }

  return Math.max(substr.length, maxLength);
}
