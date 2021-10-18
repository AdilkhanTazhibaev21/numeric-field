export function numericArrayWith(
  column,
  number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100,
  ]
) {
  let array = [];
  let columnArray = [];
  let obj = {};

  for (let i = 0; i < column; i++) {
    columnArray.push(i);
    let arr = number.slice(i * column, i * column + column);
    let length = arr.length;
    if (length < column) {
      for (let j = 0; j < column - length; j++) {
        arr.push();
      }
    }
    obj[i] = arr;
  }

  return {
    obj,
    columnArray,
  };
}
