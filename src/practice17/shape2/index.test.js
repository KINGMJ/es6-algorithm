import getDoneDate from './index'

describe('二分查找测试', () => {
    const dateArr = ['2022-12-06', '2022-12-07', '2022-12-10', '2022-12-11', '2022-12-12',
        '2022-12-13', '2022-12-14', '2022-12-17', '2022-12-18', '2022-12-19']

    test('测试用例1', () => {
        expect(getDoneDate(dateArr, '2022-12-07')).toStrictEqual('2022-12-07')
    })

    test('测试用例2', () => {
        expect(getDoneDate(dateArr, '2022-12-09')).toStrictEqual('2022-12-07')
    })

    test('测试用例2', () => {
        expect(getDoneDate(dateArr, '2021-12-09')).toStrictEqual(false)
    })
})