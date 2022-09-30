export function longestPalindrome(s: string): string {
  type Side = {
    right: number | null;
    left: number | null;
  };

  const lengthOfSide = (side: Side) => {
    if (!side.right && !side.left) {
      return 0;
    }
    return side.right! - side.left! + 1;
  };

  const longerSide = (side1: Side, side2: Side) => {
    const isNull = (side: Side) => side.left === null && side.right === null;
    if (isNull(side1) && !isNull(side2)) {
      return side2;
    } else if (!isNull(side1) && isNull(side2)) {
      return side1;
    } else if (!isNull(side1) && !isNull(side2)) {
      return lengthOfSide(side1) > lengthOfSide(side2) ? side1 : side2;
    } else {
      return;
    }
  };

  const findPalindromicAtIndex = (i: number): Side => {
    let searchLeft = i,
      searchRight = i,
      leftIdx = i,
      rightIdx = i;
    let target = s[i];

    console.log('i, now', i, searchLeft, searchRight, target);
    while (searchLeft >= 0 && searchRight < s.length) {
      const left = s[searchLeft];
      const right = s[searchRight];

      console.log('i, now', i, searchLeft, searchRight, target);

      if (target === left) {
        leftIdx = searchLeft;
        searchLeft--;
      } else if (target === right) {
        rightIdx = searchRight;
        searchRight++;
      } else if (left === right) {
        leftIdx = searchLeft;
        rightIdx = searchRight;
        target = left;
        searchLeft--;
        searchRight++;
      } else {
        break;
      }
    }

    console.log('leftidx-rightidx', leftIdx, rightIdx);

    return {
      right: rightIdx,
      left: leftIdx,
    };
  };

  let middle = Math.floor(s.length / 2);
  let leftSide: Side | undefined;
  for (let i = middle; i >= 0; i--) {
    const newSide = findPalindromicAtIndex(i);

    if (!leftSide || lengthOfSide(newSide) > lengthOfSide(leftSide)) {
      leftSide = newSide;
    }
  }

  let rightSide: Side | undefined;
  for (let i = middle; i < s.length - 2; i++) {
    const newSide = findPalindromicAtIndex(i);
    if (!rightSide || lengthOfSide(newSide) > lengthOfSide(rightSide)) {
      rightSide = newSide;
    }
  }

  let side: Side | undefined;
  if (!leftSide && !rightSide) {
    return '';
  } else if (!leftSide) {
    side = rightSide;
  } else if (!rightSide) {
    side = leftSide;
  } else {
    side = longerSide(leftSide, rightSide);
  }

  console.log('side', side);

  if (!side || side.left === null || side.right === null) {
    return '';
  } else {
    return s.slice(side.left, side.right + 1);
  }
}
