export function lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>(),
    i = 0,
    prevCount = 0;

  while (s[i]) {
    const char = s[i];

    if (map.has(char)) {
      if (map.size > prevCount) {
        prevCount = map.size;
      }
      const index = map.get(char);
      map.forEach((v, k, m) => {
        if (v <= index) {
          return m.delete(k);
        }
      });
      map.set(char, i);
    } else {
      map.set(char, i);
    }

    i++;
  }

  return Math.max(map.size, prevCount);
}
