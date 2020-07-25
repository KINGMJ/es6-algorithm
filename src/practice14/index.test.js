import LinkQueue from './index'

describe('链队列的进队列测试', () => {
  test('进队列测试', () => {
    const linkQueue = new LinkQueue()
    linkQueue.enQueue(1)
      .enQueue(2)
    console.log(linkQueue)
  })
})


describe('链队列的出队列测试', () => {
  test('空队列出队列', () => {
    const linkQueue = new LinkQueue()
    expect(linkQueue.deQueue()).toStrictEqual(false)
  })

  test('出队列后，队列不为空', () => {
    const linkQueue = new LinkQueue()
    linkQueue.enQueue(1)
      .enQueue(2)
      .enQueue(3)
      .deQueue()
    console.log(linkQueue)
    expect(linkQueue.front.data).toStrictEqual(null)
    expect(linkQueue.front.next.data).toStrictEqual(2)
    expect(linkQueue.rear.data).toStrictEqual(3)
  })

  test('出队列后，队列为空', () => {
    const linkQueue = new LinkQueue()
    linkQueue.enQueue(1)
      .deQueue()
    expect(linkQueue.front).toStrictEqual(linkQueue.rear)
  })
})