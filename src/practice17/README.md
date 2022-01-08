# 二分查找

## 算法思路

使用 while 循环折半查找，比如：1 ~ 100

![](http://image.maplejoyous.cn/post/2021/10/26/2021102616174747.png)

```javascript
let low = 0
let high = list.length - 1
```

在 while 循环里每次都检查中间的元素，首先猜 50。如果刚好是 50，就直接返回。
如果猜的字数小了，就应该把 low 改为 mid + 1，high 不变

![](http://image.maplejoyous.cn/post/2021/10/26/2021102616214343.png)

如果猜的字数大了，就应该把 high 改为 mid -1，low 不变

![](http://image.maplejoyous.cn/post/2021/10/26/2021102616242424.png)

...

一直这样缩小范围，直到找到。所以 while 的条件应该是 `low <= high`

## 具体实现：

```javascript
function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1
  let mid
  while (low <= high) {
    // 向下取整
    mid = Math.floor((low + high) / 2)
    //list[mid]为你猜的数字
    if (list[mid] == item) {
      return mid
    }
    if (list[mid] > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
```
