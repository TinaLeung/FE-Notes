/**
 * 1018. 可被 5 整除的二进制前缀 *
给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。

示例 1：
输入：[0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
示例 2：
输入：[1,1,1]
输出：[false,false,false]
示例 3：
输入：[0,1,1,1,1,1]
输出：[true,false,false,false,true,false]
示例 4：
输入：[1,1,1,0,1]
输出：[false,false,false,false,false]
 
提示：
1 <= A.length <= 30000
A[i] 为 0 或 1
 */
// i从0开始遍历，每往后移动一位，对应的十进制为上一次计算结果X2 + 当前的值
//【注意】JavaScript的 max_safe_value的上限
// 没必要保存每次转换十进制的结果
// 如果当前值N_i能被5整除，则下一次计算结果能够被5整除取决于A[i+1]能够被5整除
// 如果当前值N_i不能被5整除，则下一次计算结果为(N_i*2 + A[i+1]) % 5 = ((N_i * 5 % 5) * 2 + A[i+1])%5 = ((N_i % 5) * 2 + A[i+1]) % 5 
function prefixesDivBy5(A: number[]): boolean[] {
    let prefix = 0
    const result: boolean[] = []
    for(let i = 0; i < A.length; i++) {
        prefix = (prefix * 2 + A[i]) % 5
        if (prefix === 0) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result
};