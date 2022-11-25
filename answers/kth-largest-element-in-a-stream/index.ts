// 703. Kth Largest Element in a Stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/
export class KthLargest {
  queue: number[];
  size: number;

  constructor(k: number, nums: number[]) {
    this.size = k;
    this.queue = buildMinHeap(nums);
    const numRemove = this.queue.length - this.size;
    for (let i = 0; i < numRemove; i++) {
      this.takeMin();
    }
  }

  add(val: number): number {
    const kthLargest = this.kthLargest();
    if (this.queue.length === this.size && val < kthLargest) {
      return kthLargest;
    }

    this.queue.splice(0, 0, val);
    minHeapify(this.queue, 0);
    if (this.queue.length > this.size) {
      this.takeMin();
    }
    return this.kthLargest();
  }

  private takeMin() {
    this.queue.shift();
    minHeapify(this.queue, 0);
  }

  private kthLargest() {
    return this.queue[0];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

function buildMinHeap(arr: number[]): number[] {
  const startIdx = Math.floor(arr.length / 2);
  for (let i = startIdx; i >= 0; i--) {
    minHeapify(arr, i);
  }
  return arr;
}

function minHeapify(arr: number[], i: number) {
  const rightIdx = 2 * i;
  const leftIdx = 2 * i + 1;

  let smallestIdx;
  if (arr[rightIdx] < arr[i]) {
    smallestIdx = rightIdx;
  } else {
    smallestIdx = i;
  }

  if (arr[leftIdx] < arr[smallestIdx]) {
    smallestIdx = leftIdx;
  }

  if (smallestIdx !== i) {
    const tmp = arr[i];
    arr[i] = arr[smallestIdx];
    arr[smallestIdx] = tmp;
    minHeapify(arr, smallestIdx);
  }
}
