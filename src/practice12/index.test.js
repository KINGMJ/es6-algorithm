import LinkStack from './index'
describe('链栈测试', () => {
  test('测试', () => {
    const linkStack = new LinkStack()
    linkStack.push(1)
    linkStack.push(2)
    console.log(linkStack)

    linkStack.pop()
    console.log(linkStack)
  })
})

