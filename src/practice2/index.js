/**
 * 线性表顺序存储结构的插入
 * @param {*} list 线性表
 * @param {*} index 插入的位置
 * @param {*} ele 插入的元素
 */
export function listInsert(list, index, ele) {
  //如果插入的位置不对，返回错误
  //插入的位置可以是线性表中任意一个位置或者在线性表的末端插入，也就是list.length + 1
  if (index < 1 || index > list.length + 1) {
    return false;
  }
  //若插入的位置不在表尾
  if (index <= list.length) {
    //将要插入位置后的数据元素向右移动一位
    let i = list.length - 1;
    for (i; i >= index - 1; i--) {
      list[i + 1] = list[i];
    }
  }
  //插入新元素
  //list.length++;  js可以直接通过赋值的方式给数组扩容，不存在越界，所以不需要手动加长度
  list[index - 1] = ele;
  return list;
}

/**
 * 线性表顺序存储结构的删除
 * @param {*} list 线性表
 * @param {*} index 删除的位置
 */
export function listDelete(list, index) {
  //线性表为空
  if (list.length == 0) {
    return false;
  }
  //如果删除的位置不对，返回错误
  if (index < 1 || index > list.length) {
    return false;
  }
  //取出删除位置的元素
  //ele = list[index - 1];
  //如果删除的不是最后位置
  if (index < list.length) {
    //将要删除的位置后的元素数据向左移动一位
    let i = index;
    for (i; i < list.length; i++) {
      list[i - 1] = list[i];
    }
  }
  list.length--;
  return list;
}
