/**
 *
 * @param {array} rabbits 兔子重量数组
 * @param {int} n 笼子个数
 * @returns
 */
export function canCagePackRabbit(rabbits, n) {
  // 边界处理
  // 如果笼子比所有的兔子还多
  if (n > rabbits.length) {
    return false
  }
  const sumWeight = rabbits.reduce((acc, cur) => acc + cur)
  // 兔子必须平均分配到笼子中，所以总重量必须能被 n 整除
  if (sumWeight % n !== 0) {
    return false
  }
  // 兔子已经被放到笼子中
  let used = rabbits.map(() => false)
  // 每个笼子需要达到的目标重量
  let target = sumWeight / n
  // n号笼子初始什么都没装，从 rabbits[0] 开始做选择
  return backtracking(n, 0, rabbits, 0, used, target)

  /**
   *
   * 回溯算法，每个笼子去遍历兔子重量数组，决定是否把当前兔子放入笼子中
   * @param {int} n  n 号笼子
   * @param {int} weight  n 号笼子里面已经装的总重量为 weight
   * @param {array} rabbits
   * @param {int} start 从哪只兔子开始
   * @param {boolean} used 兔子是否已经被放到笼子中
   * @param {int} target 每个笼子需要达到的目标重量
   */
  function backtracking(n, weight, rabbits, start, used, target) {
    // 所有的笼子都被装满了
    if (n == 0) {
      return true
    }
    // 当前的笼子已经达到目标重量，开始处理下一个笼子
    if (weight == target) {
      return backtracking(n - 1, 0, rabbits, 0, used, target)
    }

    for (let i = start; i < rabbits.length; i++) {
      // 减枝
      if (used[i]) {
        continue
      }
      // 当前笼子装不下
      if (rabbits[i] + weight > target) {
        continue
      }
      // 开始选择，将 rabbit[i] 放入笼子中
      used[i] = true
      weight += rabbits[i]
      // 递归穷举下一个兔子是否能装入笼子
      if (backtracking(n, weight, rabbits, i + 1, used, target)) {
        return true
      }
      // 撤销选择
      used[i] = false
      weight -= rabbits[i]
    }
    return false
  }
}
