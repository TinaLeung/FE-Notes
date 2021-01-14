/**
    给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
    在杨辉三角中，每个数是它左上方和右上方的数的和。
    给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
    链接：https://leetcode-cn.com/leetbook/read/array-and-string/cuj3m/
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = []
    for (let i = 0; i < numRows; i++) {
        let arr = []
        arr[0] = 1
        arr[i] = 1
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            arr[j] = result[i - 1][j - 1] + result[i - 1][j]
            arr[i - j] = arr[j]
        }
        result[i] = arr
    }
    return result
}

/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    if (rowIndex === 1) {
        return [1, 1]
    }
    let preRow = getRow(rowIndex - 1)
    let curRow = []
    curRow[0] = 1
    curRow[rowIndex] = 1
    for (let i = 1; i <= Math.floor(rowIndex / 2); i++) {
        curRow[i] = preRow[i - 1] + preRow[i]
        curRow[rowIndex - i] = curRow[i]
    }
    return curRow
};