export function factorial(n) {
  if (n <= 2) {
    return n
  }
  return n * factorial(n - 1)
}

export function fibonacci(n) {
  if (n <= 2) {
    return 1
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
}

export function gcd(a, b) {
  if (a % b == 0) {
    return b
  }
  return gcd(b, a % b)
}

export function reverseList(head) {
  if (head == null || head.next == null) {
    return head
  }
  const newList = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newList
}

export function arr2Tree(arr) {
  if (arr.length == 0) {
    return arr
  }
  const head = arr[0]
  const tree = arr2Tree(arr.slice(1))
  const childrens = [], siblings = [];
  for (let i = 0; i < tree.length; i++) {
    if (head.id == tree[i].parent_id) {
      childrens.push(tree[i])
    } else {
      siblings.push(tree[i])
    }
  }
  if (childrens.length > 0) {
    head.children = childrens
  }
  return [head].concat(siblings)
}

export function arr2Tree2(arr, pid) {
  let res = [];
  arr.forEach(item => {
    if (item.parent_id === pid) {
      const result = arr2Tree2(arr, item.id);
      if (result.length) {
        item.children = result;
      }
      res.push(item);
    }
  });
  return res;
}

export function preOrderTraverse(root) {
  console.log(root.name)
  if (root.childeren == null) {
    return
  }
  for (let item of root.childeren) {
    preOrderTraverse(item)
  }
}

export function levelOrderTraverse(nodes) {
  if (nodes.length == 0) {
    return;
  }
  let temp = []
  for (let item of nodes) {
    console.log(item.name)
    if (item.childeren != null) {
      temp = temp.concat(item.childeren)
    }
  }
  levelOrderTraverse(temp)
}