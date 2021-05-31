export default (date: string) => {
    const dateArr = date.split('.')
    dateArr[1] = (+dateArr[1] + 1).toString()
    return dateArr.join('.')
}