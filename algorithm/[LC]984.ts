/**
 * 984. 不含 AAA 或 BBB 的字符串 *
给定两个整数 A 和 B，返回任意字符串 S，要求满足：
S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
子串 'aaa' 没有出现在 S 中；
子串 'bbb' 没有出现在 S 中。

示例 1：
输入：A = 1, B = 2
输出："abb"
解释："abb", "bab" 和 "bba" 都是正确答案。
示例 2：
输入：A = 4, B = 1
输出："aabaa"
 
提示：
0 <= A <= 100
0 <= B <= 100
对于给定的 A 和 B，保证存在满足要求的 S。
 */
// 如果a-b>=3，a>b则从A开始，设隔两个A放一个B需要M个，隔一个a放一个b需要N个，且满足2M+N = a,M+N = b => M = a -b, N = 2b - a
// 如果a-b<3，a>b则从A开始排隔一个A放一个B
function strWithout3a3b(a: number, b: number): string {
    const str = []
    let countA = 0, countB = 0
    let start = 'a', startNum = a
    let other = 'b', otherNum = b
    if (a < b) {
        start = 'b'
        startNum = b
        other = 'a'
        otherNum = a
    }
    if (startNum - otherNum < 3) {
        while(countA < startNum || countB < otherNum) {
            if (countA < startNum) {
                str.push(start)
                countA++
            }
            if (countB < otherNum) {
                str.push(other)
                countB++
            }
        }
    } else {
        // 每隔两个多的放一个少的
        let i = 0
        while((i <= startNum - otherNum)&&(countA < startNum)&&(countB < otherNum)) {
            if (countA < startNum) {
                str.push(start)
                countA++
            }
            if (countA < startNum) {
                str.push(start)
                countA++
            }
            if (countB < otherNum) {
                str.push(other)
                countB++
            }
            i++
        }

        while(countA < startNum || countB < otherNum) {
            if (countA < startNum) {
                str.push(start)
                countA++
            }
            if (countB < otherNum) {
                str.push(other)
                countB++
            }
        }
    }

    return str.join('')
};
