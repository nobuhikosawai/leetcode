export const singleNumber = (nums: number[]): number => {
    let set = new Set<number>();

    while(nums.length > 0) {
      const n = nums.shift();
      if (!set.has(n)) {
          set.add(n)
      } else {
          set.delete(n)
      }
    }

    return Array.from(set)[0];
};
