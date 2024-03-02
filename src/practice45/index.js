export function permute(nums) {
    const res = []
    const flag = []     // 减枝判断条件，是否已经选择过
    const track = []    // 路径列表

    const backtrack = (nums, track) => {
        if (nums.length == track.length) {
            const temp = [...track]
            res.push(temp)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            // 剪枝操作，如果已经选择了的，就不能再次选择
            if (flag[i]) {
                continue
            }
            flag[i] = true
            // 开始选择路径
            track.push(nums[i])
            // 递归
            backtrack(nums, track)
            // 撤销选择
            track.pop()
            flag[i] = false
        }
    }
    backtrack(nums, track)
    return res
}