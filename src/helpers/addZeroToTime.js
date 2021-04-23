export default time => {
    const timeArr = time.split(':')
    const modernizedTimeArr = timeArr.map(timeItem => +timeItem < 10 ? '0' + timeItem : timeItem)
    return modernizedTimeArr.join(':')
}