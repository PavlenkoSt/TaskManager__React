export default date => {
    date = date.split('.')
    date[1] = +date[1] + 1
    date = date.join('.')
    return date
}