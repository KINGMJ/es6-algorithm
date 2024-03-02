export function solveNQueens(n) {
    const res = []      // 保存每一行皇后的位置：索引为row
    const strRes = []   // 最终的输出结果
    const callNQueens = (row) => {
        // 递归结束条件：N 行都放置好了，打印结果
        if (row == n) {
            printQueens(res)
            return
        }
        // 跟全排列类似，每一行都有n种选择路径
        for (let col = 0; col < n; col++) {
            // 同样，选择之前需要检查是否可以放置，也就是剪枝操作
            if (isValid(row, col)) {
                // 开始做路径选择：也就是放置棋子，设置为Q
                res[row] = col
                // 进入下一行决策
                callNQueens(row + 1)
                // 这里其实是需要撤销选择，给非皇后棋子设置为. 
                // 在这个题解中，我们因为每个row都保存了皇后的col位置，打印时直接就可以判断出非皇后的棋子了，所以不需要做任何操作
            }
        }
    }

    // 关键在于如何判断是否可以放置皇后
    const isValid = (row, col) => {
        // 该棋子左上角和右上角的位置
        let leftup = col - 1, rightup = col + 1
        // 开始逐行向上判断是否可以放置
        for (let i = row - 1; i >= 0; i--) {
            // 如果在该棋子正上方不能放置
            if (res[i] == col) return false
            // 检查左上对角线：第i行leftup列有棋子吗
            if (leftup >= 0) {
                if (res[i] == leftup) return false
            }
            // 检查右上对角线：第i行rightup列有棋子吗
            if (rightup < n) {
                if (res[i] == rightup) return false
            }
            // 每一行对角线的位置变更
            leftup--; rightup++
        }
        return true
    }

    // 打印最终结果，一个二位矩阵
    const printQueens = (res) => {
        let arr = []
        for (let row = 0; row < n; row++) {
            let str = ""
            for (let col = 0; col < n; col++) {
                // 如果是皇后棋子，设置为Q
                if (res[row] == col) {
                    str += 'Q'
                } else {
                    str += '.'
                }
            }
            arr.push(str)
        }
        strRes.push(arr)
    }
    // 从第一行开始
    callNQueens(0)
    return strRes
}


