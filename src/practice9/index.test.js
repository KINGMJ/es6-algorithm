import DulLinkList from './index'

describe('双向链表测试', () => {
  test('测试', () => {
    const dulLinkList = new DulLinkList()
    dulLinkList.append(1)
    dulLinkList.append(2)
    dulLinkList.append(3)

    console.log(dulLinkList)

    dulLinkList.insert(2, "a")

    console.log(dulLinkList)

    dulLinkList.delete(2)

    console.log(dulLinkList)
  })
})

