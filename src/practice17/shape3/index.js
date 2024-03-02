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

function getWorkingDays(startDate, endDate, workdaysArray) {
    var startDateObj = new Date(startDate);
    var endDateObj = new Date(endDate);
  
    // 对起始日期和结束日期进行排序
    var [lowerDate, higherDate] = [startDateObj, endDateObj].sort((a, b) => a - b);
  
    // 过滤出位于起始日期和结束日期之间的工作日
    var workingDays = workdaysArray.filter(function(dateString) {
      var currentDate = new Date(dateString);
      return currentDate >= lowerDate && currentDate <= higherDate;
    });
  
    return workingDays;
  }
