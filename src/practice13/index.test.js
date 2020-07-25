import SqQueue from './index'
describe('循环队列初始化测试', () => {
  test('队列初始化', () => {
    const sqQueue = new SqQueue()
    sqQueue.init(5)
    console.log(sqQueue)
    //空队列的front与rear指针均指向下标为0的位置
    expect(sqQueue.front).toStrictEqual(0)
    expect(sqQueue.rear).toStrictEqual(0)
    expect(sqQueue.getLength()).toStrictEqual(0)
  })
})

describe('循环队列进队列测试', () => {
  test('队列已满', () => {
    const sqQueue = new SqQueue()
    sqQueue.init(2)
    sqQueue.enQueue(1)
    sqQueue.enQueue(2)
    expect(sqQueue.enQueue(3)).toStrictEqual(false)
  })

  test('空队列进队列测试', () => {
    const sqQueue = new SqQueue()
    sqQueue.init(5)
    sqQueue.enQueue(1)
    sqQueue.enQueue(2)
    sqQueue.enQueue(3)
    console.log(sqQueue)
    expect(sqQueue.getLength()).toStrictEqual(3)
    expect(sqQueue.data[0]).toStrictEqual(1)
    expect(sqQueue.data[1]).toStrictEqual(2)
    expect(sqQueue.data[2]).toStrictEqual(3)
    expect(sqQueue.rear).toStrictEqual(3)
  })

  test('循环情况，front > rear，进队列测试', () => {
    const sqQueue = new SqQueue()
    sqQueue.init(5)
    sqQueue.enQueue(1)
      .enQueue(2)
      .enQueue(3)
      .enQueue(4)
      .deQueue()
      .deQueue()
      .enQueue(5)
      .enQueue(6)
    console.log(sqQueue)
    expect(sqQueue.getLength()).toStrictEqual(4)
    expect(sqQueue.data[0]).toStrictEqual(6)
    expect(sqQueue.data[1]).toStrictEqual(null)
    expect(sqQueue.data[2]).toStrictEqual(3)
    expect(sqQueue.data[3]).toStrictEqual(4)
    expect(sqQueue.data[4]).toStrictEqual(5)
    expect(sqQueue.front).toStrictEqual(2)
    expect(sqQueue.rear).toStrictEqual(1)
  })
})

describe('循环队列出队列测试', () => {
  test('空队列', () => {
    const sqQueue = new SqQueue()
    sqQueue.init(5)
    expect(sqQueue.deQueue()).toStrictEqual(false)
  })

  test('非循环情况下出队列', () => {
    const sqQueue = new SqQueue()
    sqQueue.init(5)
    sqQueue.enQueue(1)
    sqQueue.enQueue(2)
    sqQueue.enQueue(3)
    sqQueue.deQueue()
    console.log(sqQueue)
    expect(sqQueue.getLength()).toStrictEqual(2)
    expect(sqQueue.data[0]).toStrictEqual(null)
    expect(sqQueue.data[1]).toStrictEqual(2)
    expect(sqQueue.data[2]).toStrictEqual(3)
    expect(sqQueue.front).toStrictEqual(1)
  })
})

