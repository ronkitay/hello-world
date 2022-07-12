let matrix = [ [1,6,3,9],[6,12,5,21],[4,11,23,1] ]

function getBiggest(matrix) {
    return matrix.map(arr => arr.reduce((x, y) => x > y ? x : y));
} 

let maxOfEachArray = getBiggest(matrix);

console.log(maxOfEachArray);

console.log(maxOfEachArray.filter(maxNum => maxNum >= 10 && maxNum <= 20));
