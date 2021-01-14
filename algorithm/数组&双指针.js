/**
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
示例：
输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
 
提示：
在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
链接：https://leetcode-cn.com/leetbook/read/array-and-string/c8su7/
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ')
    return words.map((word) => {
        const reverseWord = [...word]
        let i = 0, j = reverseWord.length - 1;
        while(i <= j) {
            const temp = reverseWord[i]
            reverseWord[i] = reverseWord[j]
            reverseWord[j] = temp
            i++
            j--
        }
        return reverseWord.join('')
    }).join(' ')
};


/**
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
请找出其中最小的元素。
你可以假设数组中不存在重复元素。
示例 1:
输入: [3,4,5,1,2]
输出: 1
示例 2:
输入: [4,5,6,7,0,1,2]
输出: 0
链接：https://leetcode-cn.com/leetbook/read/array-and-string/c3ki5/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) {
        return
    }
    // 二分搜索
    let res = nums[0];
    let start = 0, end = nums.length - 1;
    while(start < end - 1) {
        let mid = Math.floor((end - start) / 2) + start
        if (nums[start] > nums[mid]) {
            end = mid
        } else if (nums[mid] > nums[end]) {
            start = mid
        } else {
            break
        }
    }
    res = nums[start] > nums[end] ? nums[end] : nums[start]
    return res
};


/**
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
示例 1:
给定数组 nums = [1,1,2], 
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
你不需要考虑数组中超出新长度后面的元素。
示例 2:
给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
你不需要考虑数组中超出新长度后面的元素。
说明:
为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);
// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
链接：https://leetcode-cn.com/leetbook/read/array-and-string/cq376/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0, j = i + 1
    while(j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j]
            i++
        }
        j++
    }
    return i + 1
};


/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
链接：https://leetcode-cn.com/leetbook/read/array-and-string/c6u02/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         let j = i + 1
    //         while(nums[j] === 0) {
    //             j++
    //         }
    //         if (j >= nums.length) {
    //             break
    //         }
    //         // swap
    //         const temp = nums[i]
    //         nums[i] = nums[j]
    //         nums[j] = temp
    //     }
    // }
    // return nums
    for (let i = 0, j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            // swap
            const temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
};