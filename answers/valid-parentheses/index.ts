// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
export function isValid(s: string): boolean {
  let stack = [];

  const parentheses: string[] = s.split('');

  const mapping = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (const p of parentheses) {
    if (mapping.has(p)) {
      if (stack[stack.length - 1] === mapping.get(p)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(p);
    }
  }

  return stack.length === 0;
}
