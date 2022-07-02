export function lengthOfLongestSubstring(s: string): number {
  let set = new Set<string>(),
    target = s,
    i = 0,
    prevSet: Set<string> | undefined;

  while (target) {
    const char = target[0];

    if (set.has(char)) {
      if (!prevSet || set.size > prevSet.size) {
        prevSet = new Set([...set]);
      }
      set.clear();
      set.add(char);
    } else {
      set.add(char);
    }

    i++;
    target = s.slice(i);
  }

  return Math.max(set.size, prevSet?.size ?? 0);
}
