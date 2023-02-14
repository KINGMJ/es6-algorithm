export default function getInsertedDate(dateArr, date) {
    const position = getInsertedPosition(dateArr, date)
    const arr = [...dateArr]
    arr.splice(position, 0, date)
    return arr
}

function getInsertedPosition(dateArr, date) {
    // 边界处理
    if (date == dateArr[0] || date == dateArr[dateArr.length - 1]) {
        return false
    }
    if (date < dateArr[0]) {
        return 0
    }
    if (date > dateArr[dateArr.length - 1]) {
        return dateArr.length
    }
    // 开始二分查找
    let low = 0,
        high = dateArr.length - 1,
        mid
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (dateArr[mid] == date) {
            return false
        }
        if (dateArr[mid] > date) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    high = high < 0 ? 0 : high;
    return high + 1
}


