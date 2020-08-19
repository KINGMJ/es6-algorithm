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
  
}