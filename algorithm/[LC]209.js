/**
    长度最小的子数组
    给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
    链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
    输入：s = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var min_count = Number.MAX_SAFE_INTEGER
    var start = 0, end = 0
    var sum = 0
    while (end < nums.length) {
        sum += nums[end]
        while(sum >= s) {
            min_count = Math.min(min_count, end - start + 1)
            sum -= nums[start]
            start++
        }
        end++
    }
    return min_count === Number.MAX_SAFE_INTEGER ? 0 : min_count
};