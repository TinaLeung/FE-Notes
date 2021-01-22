/**
 * 989. 数组形式的整数加法 *
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

示例 1：
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：
输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：
输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
示例 4：
输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000

提示：
1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
如果 A.length > 1，那么 A[0] != 0
 */

 // 注意最大数值范围
function addToArrayForm(A: number[], K: number): number[] {
    const res = []
    const Karr = K.toString().split('').map(v => parseInt(v))
    let jin = 0 // 记录当前位上的数字相加后超过10的进位数字
    for (let i = A.length - 1, j = Karr.length - 1; i >= 0 || j >= 0; i--, j--) {
        const a = i >= 0 ? A[i] : 0
        const k = j >=0 ? Karr[j] : 0
        let sum = a + k + jin
        jin = Math.floor(sum / 10)
        res.unshift(sum % 10)
    }
    if (jin !== 0) {
        res.unshift(jin)
    }

    return res
};