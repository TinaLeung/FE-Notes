/**
 * 剑指 Offer 13. 机器人的运动范围 *
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：
输入：m = 2, n = 3, k = 1
输出：3
示例 2：
输入：m = 3, n = 1, k = 0
输出：1
提示：
1 <= n,m <= 100
0 <= k <= 20
 */
// 深度遍历 从[0,0]格子开始往右上走
function movingCount(m: number, n: number, k: number): number {
    let count = 0
    let arr = new Array<number[]>()
    let visited = new Array(m).fill([]).map(v => new Array(n).fill(false))
    arr.push([0, 0])
    while(arr.length > 0) {
        const item = arr.shift()
        const x = item[0]
        const y = item[1]
        if( (!visited[x][y]) && (digitSum(x) + digitSum(y) <= k)) {
            count++
            visited[x][y] = true;
            (x + 1) < m && arr.push([x + 1, y]);
            (y + 1) < n && arr.push([x, y + 1])
        }
    }

    return count
};
function digitSum(n) {
    let num = n
    let sum = 0
    while(num !== 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}