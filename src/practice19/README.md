# 递归专项练习


递归三要素：

1. 明确函数想要干什么

2. 寻找递归结束条件（专业的说法是找出基线条件 base case，基线条件指的是函数不再调用自己，从而避免形成无限循环）

3. 找出函数的等价关系式（利用分治的思想，不断缩小参数的范围）


所以写递归代码的关键就是找到如何将大问题分解为小问题的规律，并且基于此写出递推公式，然后再推敲终止条件，最后将递推公式和终止条件翻译成代码。

需要注意的是，我们平时写代码都会试图搞清楚计算机每一步都是怎么执行的。对于递归代码，这种试图想清楚整个递和归过程的做法，实际上是进入了一个思维误区。


如果一个问题 A 可以分解为若干子问题 B、C、D，你可以假设子问题 B、C、D 已经解决，在此基础上思考如何解决问题 A。

递归代码不是写出来的，是推导出来的

## 1. 阶乘问题

6的阶乘， 6*5*4*3*2*1

第一步，明确函数干什么：计算阶乘

```
function factorial(n){

}

```

第二步，找出基线条件

1的阶乘为1
2的阶乘为2

```
factorial(1) == 1
factorial(2) == 2
```

```
function factorial(n){
  if(n == 1){
    return 1
  }
  if(n == 2){
    return 2
  }
}
```

重构

```
function factorial(n){
  if(n<=2){
    return n
  }
}
```

第三步：利用分治的思想，缩小问题的规模。也就是寻找等价关系

```
factorial(6) = 6*5*4*3*2*1
factorial(5) = 5*4*3*2*1

等价

factorial(6) = 6 * factorial(5)
factorial(n) = n * factorial(n-1)
```

```
function factorial(n){
  if(n<=2){
    return n
  }
  return n * factorial(n-1)
}
```


## 2. 斐波那契数列

1、1、2、3、5、8、13、21、34.... 前两项之和等于后一项。求第n项的值

第一步：

```
function fibonacci(){

}
```

第二步：

```
fibonacci(1) == 1
fibonacci(2) == 1

function fibonacci(n){
  if(n<=2){
    return 1
  }
}
```

第三步：

```
fibonacci(7) == fibonacci(5) + fibonacci(6)

fibonacci(n) == fibonacci(n-2) + fibonacci(n-1)
```

```
function fibonacci(n){
  if(n<=2){
    return 1
  }
  return fibonacci(n-2) + fibonacci(n-1) 
}
```

## 3. 分地问题（欧几里得算法）

长宽分别为 1680m，640m的地，均匀分成方块，且分出的方块尽可能大。

该问题等同于求最大公约数问题，使用欧几里得算法

```
1680 % 640 = 400     2块 640x640的地，1块 640x400的地
640 % 400 = 240
400 % 240 =  160
240 % 160 = 80
160 % 80 = 0 
```

最终得到的最大方块是 80平方米

第一步：

```
function gcd(a,b){

}
```

第二步：

160x80 ，一条边是另一条边的整数倍

```
function gcd(a,b){
  if(a%b == 0){
    return b
  }
}
```

第三步:

```
gcd(1680, 640) == gcd(640, 400)
gcd(a, b) == gcd(b, a % b)
```

```
function gcd(a,b){
  if(a%b == 0){
    return b
  }
  return gcd(b, a % b)
}
```

## 4. 反转链表

https://leetcode-cn.com/problems/reverse-linked-list/


第一步：

定义一个反转单链表的函数，参数为链表的第一个节点

```
function reverseList(head){

}
```

第二步：

基线条件：当链表为空或者链表只有一个节点，返回链表本身即可

```
function reverseList(head){
  if(head == null || head.next == null){
    return head
  }
}
```

第三步：

前面的几个例子，等价关系通过公式推导就很容易得出。这个例子就没有那么直观了。同样，我们用分治的思想，把大问题拆小

reverseList (1->2->3->4)

拆成 1 和 reverseList(2->3->4)

```
function reverseList(head){
  if(head == null || head.next == null){
    return head
  }
  const newList = reverseList(head.next)
}

```

前面说的一句话在这里就变得极为重要了：如果一个问题 A 可以分解为若干子问题 B、C、D，你可以假设子问题 B、C、D 已经解决，在此基础上思考如何解决问题 A。

这里的话，我们定义了一个反转链表的函数。我们假设 2->3->4 已经反转成功了，先把它保存起来。

现在链表如下：

```
1的next还是2

1 -> 2

newList 4->3->2

```

我们在这个基础上解决1的问题。只需要把节点2的next指向1，然后把1的next指向null，就ok了

最后返回这个新的链表

```
4->3->2->1->null
```

```
function reverseList(head){
  if(head == null || head.next == null){
    return head
  }
  const newList = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newList
}
```

## 5. 数组转多叉树

```
- 全部文件
  - 图片
    - 壁纸
      - 风景
      - 动漫
      - 游戏
    - 头像
  - 文档
  - 视频
    - 电影
    - 纪录片
```

```
[
      { id: 1, name: '全部文件', parent_id: null },
      { id: 2, name: '图片', parent_id: 1 },
      { id: 3, name: '文档', parent_id: 1 },
      { id: 4, name: '视频', parent_id: 1 },
      { id: 5, name: '壁纸', parent_id: 2 },
      { id: 6, name: '头像', parent_id: 2 },
      { id: 7, name: '电影', parent_id: 4 },
      { id: 8, name: '纪录片', parent_id: 4 },
      { id: 9, name: '风景', parent_id: 5 },
      { id: 10, name: '动漫', parent_id: 5 },
      { id: 11, name: '游戏', parent_id: 5 }
]
```

第一步：

```
function arr2Tree(arr){

}
```


第二步：

基线条件：如果arr为空数组，直接返回空数组

```
function arr2Tree(arr){
  if(arr.length == 0){
    return arr
  }
}
```

第三步：

大问题拆解，把数组的第一项拿出来，数组剩余的部分继续做 arr2Tree 操作

假设剩下的部分已经转换成tree了，代码如下

```
function arr2Tree(arr){
  if(arr.length == 0){
    return arr
  }
  const head = arr[0]
  const rest = arr.slice(1)
  const tree = arr2Tree(rest)
}
```

然后我们只需解决数组第一项的问题，把它跟余下的已经转换为tree的数据合并为一个tree

```
{ id: 1, name: '全部文件', parent_id: null }

[
    { id: 2, name: '图片', childern:[...] },
    { id: 3, name: '文档' },
    { id: 4, name: '视频', children: [...] }
]
```

对于第一项的问题，我们只需要遍历余下的数组，判断parent_id是否是等于第一项的id，如果是就是它的子节点；如果不是，就跟它是兄弟节点

### 优化写法：找儿子

对于这样的数组，我们可以先找 null 的儿子为 1， 再找 1 的儿子为2，3，4， 依次类推


```
[
      { id: 1, name: '全部文件', parent_id: null },
      { id: 2, name: '图片', parent_id: 1 },
      { id: 3, name: '文档', parent_id: 1 },
      { id: 4, name: '视频', parent_id: 1 },
      { id: 5, name: '壁纸', parent_id: 2 },
      { id: 6, name: '头像', parent_id: 2 },
      { id: 7, name: '电影', parent_id: 4 },
      { id: 8, name: '纪录片', parent_id: 4 },
      { id: 9, name: '风景', parent_id: 5 },
      { id: 10, name: '动漫', parent_id: 5 },
      { id: 11, name: '游戏', parent_id: 5 }
]
```

第一步：

```
function arr2Tree(arr, pid){

}
```

第二步：

在整个数组中找儿子，可能找不到。这个例子基线条件其实没有那么明显，遍历整个数组，遍历完了都没找到儿子。那么什么都不做就行了。

我们用一个数组存放找到的结果

```
function arr2Tree(arr, pid) {
  const res = [];
  arr.forEach(item => {
    if (item.parent_id === pid) {

    }  
  });
  return res
}
```

第三步：

我们把问题分解为找 null 的儿子 1， 以及 1 的儿子 2、3、4...

我们假设找 1 的儿子的问题已经解决，再来看找 null的儿子的问题。

找到的结果可能有多个，我们保存在res 里，最终返回这个res即可。

```
function arr2Tree(arr, pid) {
  const res = [];
  arr.forEach(item => {
    if (item.parent_id === pid) {
       res.push(item)
    }  
  });
  return res
}
```

也有可能没找到儿子。那么对于对于前面我们假设找 1 的儿子的问题已经解决了这种情况。它也是要么找到了儿子，返回res。要么没找到，返回[]。

所以我们可能根据返回的结果来做个判断。如果当前选项的儿子找到了儿子，我们给它追加一个children属性就可以了，用来存放它的儿子。

```
function arr2Tree(arr, pid) {
  const res = [];
  arr.forEach(item => {
    if (item.parent_id === pid) {
      const result = arr2Tree2(arr, item.id);
      if (result.length) {
        item.children = result;
      }
      res.push(item)
    }  
  });
  return res
}
```


## 多叉树的前序遍历（深度优先遍历）

二叉树是先遍历根，再遍历左子树，再遍历右子树。对于多叉树，原理相同，区别就是遍历左子树和右子树变成循环对子树进行递归遍历算法

第一步：

同样，我们找出基线条件。对于多叉树，我们对它进行前序遍历，当遍历到叶子节点的时候，就结束了。

```
function preOrderTraverse(root) {
  if (root.childeren == null) {
    return
  }
}
```

第二步：

大问题拆小。对于多叉树而言。我们有一个根节点，然后根节点下有几个孩子。我们假设它的孩子的问题已经解决了。那么我们解决这个根节点的问题就行了。

所以，我们首先访问根节点本身，再依次访问它的孩子。

```
function preOrderTraverse(root) {
  console.log(root)
  if (root.childeren == null) {
    return
  }
  for (let item of root.childeren) {
    preOrderTraverse(item)
  }
}

```


## 多叉树的层序遍历（广度优先遍历）

层序遍历，一层一层的访问树的节点。通常可以用这种方式来求树的深度。在处理现实问题，比如部门树，我们要限制子部门的深度，就可以用层序遍历来实现。

树的层序遍历用递归可能不太好理解，因为树的根节点只有一个，但它的孩子节点有多个。这样去推导的时候，数据类型不一致。

我们转化成森林的层序遍历就好理解了。

森林是由若干棵树组成的。层序遍历可以先访问森林的第一层，再访问森林的第二层，依次类推。

我们可以确定递归的参数为每一层的节点组成的数组，森林的第一层为[root]

第一步：


```
//nodes 为森林每一层节点组成的数组
function levelOrderTraverse(nodes) {
  
}
```

第二步：

基线条件也很好确定了，如果传入的nodes为空，就结束掉

```
function levelOrderTraverse(nodes) {
  if(nodes.length == 0){
    return
  }
}
```

第三步：

分解问题，假设第二层的节点的问题已经解决。我们来处理第一层节点的问题。

那么我们只需要遍历第一层的所有节点，打印它们即可。


```
function levelOrderTraverse(nodes) {
  if (nodes.length == 0) {
    return;
  }
  for (let item of nodes) {
    console.log(item.name)
  }
}
```

前面我们说假设第二层的节点的问题已经解决，也就是levelOrderTraverse([第二层节点的集合])。那么我们在第一层只需要得到第二层的节点的集合。

我们使用一个 temp 数组来存放第二层节点的值，也就是说如果第一层节点遍历的时候，它有 children 就保存到 temp 数组中。

```
function levelOrderTraverse(nodes) {
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
```