function mergeAndSortArray(
  array,
  array1 = array.slice(0, Math.floor(array.length / 2)),
  array2 = array.slice(Math.floor(array.length / 2), array.length)
) {
  if (array.length === 1) {
    return array;
  } else {
    array1 = mergeAndSortArray(array1);
    array2 = mergeAndSortArray(array2);
    return mergeSortedArray(array1, array2);
  }
}

function mergeSortedArray(array1, array2) {
  let pointerOne = 0;
  let pointerTwo = 0;
  let mergedArray = [];
  while (pointerOne < array1.length && pointerTwo < array2.length) {
    if (array1[pointerOne] <= array2[pointerTwo]) {
      mergedArray.push(array1[pointerOne]);
      pointerOne++;
    } else {
      mergedArray.push(array2[pointerTwo]);
      pointerTwo++;
    }
  }
  while (pointerOne === array1.length && pointerTwo < array2.length) {
    mergedArray.push(array2[pointerTwo]);
    pointerTwo++;
  }
  while (pointerOne < array1.length && pointerTwo === array2.length) {
    mergedArray.push(array1[pointerOne]);
    pointerOne++;
  }
  return mergedArray;
}
let testArray = [9, 2, 14, 2, 3, 4, 10, 7, 65, 21];
console.log(mergeAndSortArray(testArray));
