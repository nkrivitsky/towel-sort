// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) return [];

    let resultArray = []

    for (let i = 0; i < matrix.length; i++) resultArray = resultArray.concat(i % 2 == 1 && Array.isArray(matrix[i]) ? matrix[i].reverse() : matrix[i])

    return resultArray;
}