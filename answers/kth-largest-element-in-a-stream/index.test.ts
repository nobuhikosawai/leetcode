import { KthLargest } from '.';

describe('kth-largest-element-in-a-stream', () => {
  it('test1', () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.add(3)).toEqual(4);
    expect(kthLargest.add(5)).toEqual(5);
    expect(kthLargest.add(10)).toEqual(5);
    expect(kthLargest.add(9)).toEqual(8);
    expect(kthLargest.add(4)).toEqual(8);
  });

  it('test2', () => {
    const kthLargest = new KthLargest(2, [0]);
    expect(kthLargest.add(-1)).toEqual(-1);
    expect(kthLargest.add(1)).toEqual(0);
    expect(kthLargest.add(-2)).toEqual(0);
    expect(kthLargest.add(-4)).toEqual(0);
    expect(kthLargest.add(3)).toEqual(1);
  });

  it('test3', () => {
    const input1 = [
      'KthLargest',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
      'add',
    ];
    const input2 = [
      [7, [-10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1]],
      [3],
      [2],
      [3],
      [1],
      [2],
      [4],
      [5],
      [5],
      [6],
      [7],
      [7],
      [8],
      [2],
      [3],
      [1],
      [1],
      [1],
      [10],
      [11],
      [5],
      [6],
      [2],
      [4],
      [7],
      [8],
      [5],
      [6],
    ];

    const output = [
      null,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
    ];

    let kthLargest: KthLargest;
    const res = input1.reduce((acc, command, i) => {
      if (command === 'KthLargest') {
        kthLargest = new KthLargest(
          input2[i][0] as number,
          input2[i][1] as number[]
        );
        acc.push(null);
        return acc;
      } else if (command === 'add') {
        const res = kthLargest.add(input2[i][0] as number);
        acc.push(res);
        return acc;
      }
    }, []);

    expect(res).toEqual(output);
  });
});
