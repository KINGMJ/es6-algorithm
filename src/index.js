const tree = {
  name: 'A', childeren: [
    {
      name: 'B', childeren: [
        {
          name: 'B1', childeren: [
            { name: 'B11' },
            { name: 'B12' },
            { name: 'B13' }
          ]
        },
        {
          name: 'B2'
        }]
    },
    {
      name: 'C',
      childeren: [
        { name: 'C1' },
        { name: 'C2' }
      ]
    },
    {
      name: 'D',
      childeren: [{ name: 'D1' }]
    }
  ]
}


// console.log(tree)
// console.log(preOrderTraverse(tree))
console.log(levelOrderTraverse([tree]))


//树的前序遍历
//二叉树是先遍历根，再遍历左子树，再遍历右子树。对于多叉树，原理相同，区别就是遍历左子树和右子树变成循环对子树进行递归遍历算法
function preOrderTraverse(root) {
  console.log(root)
  if (root.childeren == null) {
    return
  }
  for (let item of root.childeren) {
    preOrderTraverse(item)
  }
}

//树的前序遍历和层序遍历对应到图里面就是深度优先和广度优先搜索


//树的层序遍历
function levelOrderTraverse(root) {
  if (root.length == 0) {
    return;
  }
  let temp = []
  for (let item of root) {
    console.log(item.name)
    if (item.childeren != null) {
      temp = temp.concat(item.childeren)
    }
  }
  levelOrderTraverse(temp)
}