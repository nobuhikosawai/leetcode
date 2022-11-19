// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
export function isValid(s: string): boolean {
  let stack = [];

  const parentheses: string[] = s.split('');

  for (const p of parentheses) {
    switch (p) {
      case '(':
      case '{':
      case '[':
        stack.push(p);
        break;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          break;
        } else {
          return false;
        }
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
          break;
        } else {
          return false;
        }
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
          break;
        } else {
          return false;
        }
    }
  }

  return stack.length === 0;
}
