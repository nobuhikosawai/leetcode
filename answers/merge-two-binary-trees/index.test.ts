import { arrayToTreeNode } from '../../data-structures/tree-node';
import { mergeTrees } from './index';

describe('mergeTrees', () => {
  it('test1', () => {
    const input1 = [1, 3, 2, 5];
    const input2 = [2, 1, 3, null, 4, null, 7];
    const resArray = [3, 4, 5, 5, 4, null, 7];
    const root1 = arrayToTreeNode(input1);
    const root2 = arrayToTreeNode(input2);
    const res = arrayToTreeNode(resArray);
    expect(JSON.stringify(mergeTrees(root1, root2))).toEqual(
      JSON.stringify(res)
    );
  });

  it('test2', () => {
    const input1 = [1];
    const input2 = [1, 2];
    const resArray = [2, 2];
    const root1 = arrayToTreeNode(input1);
    const root2 = arrayToTreeNode(input2);
    const res = arrayToTreeNode(resArray);
    expect(JSON.stringify(mergeTrees(root1, root2))).toEqual(
      JSON.stringify(res)
    );
  });
});
