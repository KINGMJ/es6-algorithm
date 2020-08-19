function arr2Tree(arr) {
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

function arr2Tree2(arr, pid) {
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

const folders = [
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

//console.log(arr2Tree(folders))
console.log(arr2Tree2(folders, null))