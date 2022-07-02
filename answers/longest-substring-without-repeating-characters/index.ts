export function lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>(),
    target = s,
    i = 0,
    prevMap = new Map<string, number>();

  while (target) {
    const char = target[0];

    if (map.has(char)) {
      if (map.size > prevMap.size) {
        prevMap = new Map(map);
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
    target = s.slice(i);
  }

  return Math.max(map.size, prevMap?.size ?? 0);
}
