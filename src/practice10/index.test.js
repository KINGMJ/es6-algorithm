import SqStack from './index'
describe('栈的顺序存储结构测试', () => {
  test('测试', () => {
    const sqStack = new SqStack()
    sqStack.init(5)
    console.log(sqStack)

    sqStack.push(1)
    sqStack.push(2)
    sqStack.push(3)
    console.log(sqStack)

    sqStack.pop();
    console.log(sqStack)
  })
})

