export default (time: string) => {
    const timeArr = time.split(':')
    const modernizedTimeArr = timeArr.map((timeItem: string) => +timeItem < 10 ? '0' + timeItem : timeItem)
    return modernizedTimeArr.join(':')
}