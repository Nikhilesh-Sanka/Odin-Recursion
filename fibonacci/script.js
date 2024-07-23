function fibonacci(n, array = [0, 1]) {
  if (n === 1) {
    return [0];
  }
  if (n <= 2) {
    return array;
  } else {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibonacci(n - 1, array);
  }
}
console.log(fibonacci(10));
