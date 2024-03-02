import { solveNQueens } from './index'

describe('N皇后问题', () => {
    test('case1: 4', () => {
        expect(solveNQueens(4)).toStrictEqual(
            [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]
        )
    })

    test('case2: 1', () => {
        expect(solveNQueens(1)).toStrictEqual([["Q"]])
    })
})



// https://leetcode.cn/problems/n-queens/description/