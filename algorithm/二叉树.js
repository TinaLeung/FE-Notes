// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * 前序遍历 *
给定一个二叉树，返回它的 前序 遍历。
示例:
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 
输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
链接：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let res = []
    res.push(root.val)
    res = res.concat(preorderTraversal(root.left))
    res = res.concat(preorderTraversal(root.right))
    return res
};


/**
 * 中序遍历 *
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let res = []
    res = res.concat(inorderTraversal(root.left))
    res.push(root.val)
    res = res.concat(inorderTraversal(root.right))
    return res
};


/**
 * 后序遍历 *
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let res = []
    res = res.concat(postorderTraversal(root.left))
    res = res.concat(postorderTraversal(root.right))
    res.push(root.val)
    return res
};


/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树 *
注意:
你可以假设树中没有重复的元素。
例如，给出
中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length === 0 || inorder.length === 0) {
        return null
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0])
    }
    // 后序遍历最后一个节点为根节点
    const root = new TreeNode(postorder[postorder.length - 1])
    // 根节点在前序遍历中的位置，前面是左子树的前序遍历，后面为右子树的前序遍历
    const rootIndexInorder = inorder.indexOf(root.val)

    root.left = buildTree(inorder.slice(0, rootIndexInorder), postorder.slice(0, rootIndexInorder))
    root.right = buildTree(inorder.slice(rootIndexInorder + 1), postorder.slice(rootIndexInorder, postorder.length - 1))

    return root
}


/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树 *
注意:
你可以假设树中没有重复的元素。
例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var build = function(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) {
            return null
        }
        if ((preStart === preEnd) && (inStart === inEnd)) {
            return new TreeNode(preorder[preStart])
        }

        // 根节点
        const rootVal = preorder[preStart]
        const root = new TreeNode(rootVal)
        const seperator = inorder.indexOf(rootVal)

        // 左子树的节点个数
        const leftLength = seperator - inStart
        root.left = build(preStart + 1, leftLength + preStart, inStart, inStart + leftLength - 1)

        // 右子树的节点个数
        const rightLength = inEnd - seperator
        root.right = build(preEnd - rightLength + 1, preEnd, seperator + 1, inEnd)

        return root
    }
};


/**
 * 层序遍历 *
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）
 */
// 方法一：递归法
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    let levelTraversal = function(root, level) {
        console.log(root.val)
        let row = []
        if (res.length - 1 >= level) {
            row = res[level]
            row.push(root.val)
        } else {
            row.push(root.val)
            res.push(row)
        }
        root.left && levelTraversal(root.left, level + 1)
        root.right && levelTraversal(root.right, level + 1)
    }
    root && levelTraversal(root, 0)
    return res
}

// 方法二 广度搜索法
var levelOrder = function(root) {
    let res = []
    if (!root) {
        return res
    }
    const que = []
    que.push(root)
    while(que.length !== 0) {
        const currentLevel = que.length
        res.push([])
        for (let i = 1; i <= currentLevel; i++) {
            const node = que.shift()
            res[res.length - 1].push(node.val)
            node.left && que.push(node.left)
            node.right && que.push(node.right)
        }
    }
    return res
}
/**
 ****** 总结 ******
当遇到树问题时，请先思考一下两个问题：
你能确定一些参数，从该节点自身解决出发寻找答案吗？
你可以使用这些参数和节点本身的值来决定什么应该是传递给它子节点的参数吗？
如果答案都是肯定的，那么请尝试使用 “自顶向下” 的递归来解决此问题。
或者你可以这样思考：对于树中的任意一个节点，如果你知道它子节点的答案，你能计算出该节点的答案吗？ 如果答案是肯定的，那么 “自底向上” 的递归可能是一个不错的解决方法。
 */


/**
 * 二叉树的最大深度 *
给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
示例：
    给定二叉树 [3,9,20,null,null,15,7]，
        3
        / \
        9  20
            /  \
            15   7
    返回它的最大深度 3 。
 */
// 自顶向下
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0
    if (root === null) {
        return max
    }
    var maxDepthFunc = function(root, depth) {
        if (root.left === null && root.right === null) {
            max = Math.max(max, depth)
        }
        maxDepthFunc(root.left, depth + 1)
        maxDepthFunc(root.right, depth + 1)
    }
    maxDepthFunc(root, 1)
    return max
};

// 自底向上
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    const maxLeftDepth = maxDepth(root.left)
    const maxRightDepth = maxDepth(root.right)
    return Math.max(maxLeftDepth, maxRightDepth) + 1
};


/**
 * 对称二叉树 *
给定一个二叉树，检查它是否是镜像对称的。
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3
进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 */
/**
 * 递归法 *
【思路】 一个二叉树是对称的话，它的左子树和右子树是镜像对称的
即左子树根节点的值等于右子树根节点的值，且左子树p的左子树与右子树q的右子树镜像对称
且左子树p的右子树与右子树q的左子树镜像对称
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var check = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}
var isSymmetric = function(root) {
    if (root === null) {
        return true
    }
    return check(root.left, root.right)
}

/**
 * 迭代法 *
【思路1】利用层序遍历二叉树 依次判断每一层是否是镜像对称的（回文）
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true
    }

    let que = [] // 存放层序遍历结果
    que.push(root)
    while(que.length !== 0) {
        const levelArr = []
        const currentLevel = que.length
        for (let i = 1; i <= currentLevel; i++) {
            let node = que.shift()
            if (node !== null) {
                levelArr.push(node.val)
            } else {
                levelArr.push(null)
            }
            
            node && que.push(node.left)
            node && que.push(node.right)
        }
        // 判断当前层是否镜像对称
        let i = 0, j = levelArr.length - 1
        while(i <= j) {
            if (levelArr[i] !== levelArr[j]) {
                return false
            }
            i++
            j--
        }
    }
    return true
};
/**
【思路2】使用一个队列，第一次放入两个root节点，然后依次放入第一个root的左子树和第二个root的右子树，
每次从队列取出两个节点，并比较两个节点的值是否相等，相等的话在放入第一个节点的左子树和第二个节点的右子树
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var check = function(p, q) {
    let que = []
    que.push(p)
    que.push(q)
    while(que.length !== 0) {
        const u = que.shift()
        const v = que.shift()
        if (!u && !v) {
            continue
        }
        if (!u || !v || u.val !== v.val) {
            return false
        }
        que.push(u.left)
        que.push(v.right)
        que.push(u.right)
        que.push(v.left)
    }
    return true
}
var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    return check(root.left, root.right)
}



/**
 * 路径总和 *
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
说明: 叶子节点是指没有子节点的节点。
示例: 
给定如下二叉树，以及目标和 sum = 22，
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false

    if (!root.left && !root.right) {
        return root.val === sum
    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
