import { permute } from './index'

describe('全排列问题', () => {
    test('case1: [1,2,3]', () => {
        expect(permute([1, 2, 3])).toStrictEqual([
            [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
        ])
    })

    test('case2: [0,1]', () => {
        expect(permute([0, 1])).toStrictEqual([
            [0, 1], [1, 0]
        ])
    })

    test('case3: [1]', () => {
        expect(permute([1])).toStrictEqual([[1]])
    })
})


// https://leetcode.cn/problems/permutations/description/