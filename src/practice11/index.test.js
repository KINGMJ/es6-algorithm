import SqDoubleStack from './index'
describe('两栈共享空间测试', () => {
  test('测试', () => {
    const sqDoubleStack = new SqDoubleStack()
    sqDoubleStack.init(10)
    console.log(sqDoubleStack)

    sqDoubleStack.push(1, 1)
    sqDoubleStack.push(2, 1)
    sqDoubleStack.push(3, 2)
    sqDoubleStack.push(4, 2)

    console.log(sqDoubleStack)

    sqDoubleStack.pop(1)
    sqDoubleStack.pop(2)

    console.log(sqDoubleStack)
  })
})

