function floatToTop(array, indexToStart = 0) {
  if (indexToStart === array.length - 1) {
    return array;
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      let a = array[i];
      let b = array[i + 1];
      if (a < b) {
        array[i + 1] = a;
        array[i] = b;
      }
    }
    return floatToTop(array, indexToStart + 1);
  }
}
console.log(floatToTop([9, 0, 8, 77, 63, 87, 9, 8]));
