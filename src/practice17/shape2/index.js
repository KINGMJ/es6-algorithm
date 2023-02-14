export default function getDoneDate(dateArr, date) {
    // 边界处理
    if (date < dateArr[0]) {
        return false
    }
    if (date == dateArr[0]) {
        return dateArr[0]
    }
    if (date >= dateArr[dateArr.length - 1]) {
        return dateArr[dateArr.length - 1]
    }
    // 开始二分查找
    let low = 0,
        high = dateArr.length - 1,
        mid
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (dateArr[mid] == date) {
            return dateArr[mid]
        }
        if (dateArr[mid] > date) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    high = high < 0 ? 0 : high;
    return dateArr[high];
}
