import CircleLinkList, { merge } from './index'

describe('循环链表测试', () => {
  test('测试', () => {
    const circleLinkList1 = new CircleLinkList()

    circleLinkList1.append(1)
    circleLinkList1.append(2)
    circleLinkList1.append(3)
    console.log(circleLinkList1)


    const circleLinkList2 = new CircleLinkList()
    circleLinkList2.append("a")
    circleLinkList2.append("b")
    circleLinkList2.append("c")

    console.log(merge(circleLinkList1, circleLinkList2))
  })

})

